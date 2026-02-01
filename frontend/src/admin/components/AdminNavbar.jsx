import React, { useEffect, useState } from 'react'
import { navbarStyles } from '../../assets/dummyStyles'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { LayoutDashboard, LogOut, Menu, X, Shield } from 'lucide-react'
import nextgen from '../../assets/nextgen.jpg';
const AdminNavbar = ({ logoSrc }) => {
  const navigate = useNavigate()

  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [admin, setAdmin] = useState(null)

  // 🔄 Track admin auth state
  useEffect(() => {
    try {
      const token = localStorage.getItem('adminToken')
      const storedAdmin = localStorage.getItem('currentAdmin')

      setIsAdminLoggedIn(!!token)
      if (storedAdmin) setAdmin(JSON.parse(storedAdmin))
    } catch (e) {
      setIsAdminLoggedIn(false)
    }

    const handler = (ev) => {
      const detailAdmin = ev?.detail?.admin ?? null
      setIsAdminLoggedIn(!!detailAdmin)
      setAdmin(detailAdmin)
    }

    window.addEventListener('adminAuthChanged', handler)
    return () => window.removeEventListener('adminAuthChanged', handler)
  }, [])

  // 🚪 Logout
  const handleLogout = () => {
    try {
      localStorage.removeItem('adminToken')
      localStorage.removeItem('currentAdmin')
    } catch (e) {}

    window.dispatchEvent(
      new CustomEvent('adminAuthChanged', { detail: { admin: null } })
    )

    setMenuOpen(false)
    navigate('/admin/login', { replace: true })
  }

  return (
    <nav className={navbarStyles.nav}>
      <div
        className={navbarStyles.decorativePattern}
        style={{ backgroundImage: navbarStyles.decorativePatternBackground }}
      ></div>

      <div className={navbarStyles.bubble1}></div>
      <div className={navbarStyles.bubble2}></div>
      <div className={navbarStyles.bubble3}></div>

      <div className={navbarStyles.container}>
        {/* LOGO */}
        <div className={navbarStyles.logoContainer}>
          <Link to="/admin/dashboard" className={navbarStyles.logoButton}>
            <div className={navbarStyles.logoInner}>
              <img
                src={nextgen}
                alt="Admin"
                className={navbarStyles.logoImage}
              />
            </div>
          </Link>
        </div>

        {/* TITLE */}
        <div className={navbarStyles.titleContainer}>
          <div className={navbarStyles.titleBackground}>
            <h1 className={navbarStyles.titleText}>
              Admin Panel – Next Gen CBT
            </h1>
          </div>
        </div>

        {/* DESKTOP ACTIONS */}
        <div className={navbarStyles.desktopButtonsContainer}>
          <div className={navbarStyles.spacer}></div>

          <NavLink
            to="/admin/dashboard"
            className={navbarStyles.resultsButton}
          >
            <LayoutDashboard className={navbarStyles.buttonIcon} />
            Dashboard
          </NavLink>

          {isAdminLoggedIn && (
            <button
              onClick={handleLogout}
              className={navbarStyles.loginButton}
            >
              <LogOut className={navbarStyles.buttonIcon} />
              Logout
            </button>
          )}
        </div>

        {/* MOBILE MENU */}
        <div className={navbarStyles.mobileMenuContainer}>
          <button
            onClick={() => setMenuOpen((s) => !s)}
            className={navbarStyles.menuToggleButton}
          >
            {menuOpen ? (
              <X className={navbarStyles.menuIcon} />
            ) : (
              <Menu className={navbarStyles.menuIcon} />
            )}
          </button>

          {menuOpen && (
            <div className={navbarStyles.mobileMenuPanel}>
              <ul className={navbarStyles.mobileMenuPanel}>
                <li>
                  <NavLink
                    to="/admin/dashboard"
                    className={navbarStyles.mobileMenuItem}
                    onClick={() => setMenuOpen(false)}
                  >
                    <LayoutDashboard className={navbarStyles.mobileMenuIcon} />
                    Dashboard
                  </NavLink>
                </li>

                {isAdminLoggedIn && (
                  <li>
                    <button
                      type="button"
                      onClick={handleLogout}
                      className={navbarStyles.mobileMenuItem}
                    >
                      <LogOut className={navbarStyles.mobileMenuIcon} />
                      Logout
                    </button>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>

      <style>{navbarStyles.animations}</style>
    </nav>
  )
}

export default AdminNavbar
