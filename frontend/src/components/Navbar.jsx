import React, { useEffect, useState } from 'react';
import { navbarStyles } from '../assets/dummyStyles';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Award, LogIn, Menu, X, LogOut } from 'lucide-react';
import nextgen from '../assets/nextgen.jpg';
const Navbar = ({ logoSrc }) => {
    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const checkAuth = () => {
            const token = localStorage.getItem("authToken");
            setLoggedIn(!!token);
        };
        checkAuth();
        window.addEventListener("authChanged", checkAuth);
        return () => window.removeEventListener("authChanged", checkAuth);
    }, []);

    const handleLogout = () => {
        localStorage.clear();
        window.dispatchEvent(new CustomEvent("authChanged", { detail: { user: null } }));
        setMenuOpen(false);
        navigate('/login');
    };

    return (
        <nav className={navbarStyles.nav}>
            {/* Background Effects */}
            <div className={navbarStyles.bubble1}></div>
            <div className={navbarStyles.bubble2}></div>

            <div className={navbarStyles.container}>
                {/* Logo Section */}
                <div className={navbarStyles.logoContainer}>
                    
                        <div className={navbarStyles.logoInner}>
                            <img 
                                src={nextgen}
                                alt="Next Gen" 
                                className={navbarStyles.logoImage} 
                            />
                        </div>
                    
                </div>

                {/* Title Section */}
                <div className={navbarStyles.titleContainer}>
                    <div className={navbarStyles.titleBackground}>
                        <h1 className={navbarStyles.titleText}>
                            Next Gen Computer Hub - Computer Based Test
                        </h1>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className={navbarStyles.desktopButtonsContainer}>
                    {/* <NavLink 
                        to="/results" 
                        className={({isActive}) => `${navbarStyles.resultsButton} ${isActive ? 'text-indigo-400' : ''}`}
                    >
                        <Award className={navbarStyles.buttonIcon} />
                        <span>My Result</span>
                    </NavLink> */}

                    {loggedIn ? (
                        <button onClick={handleLogout} className={navbarStyles.loginButton}>
                            <LogOut className={navbarStyles.buttonIcon} />
                            Logout
                        </button>
                    ) : (
                        <NavLink to='/login' className={navbarStyles.loginButton}>
                            <LogIn className={navbarStyles.buttonIcon} />
                            Login
                        </NavLink>
                    )}
                </div>

                {/* Mobile Toggle */}
                <div className={navbarStyles.mobileMenuContainer}>
                    <button onClick={() => setMenuOpen(!menuOpen)} className={navbarStyles.menuToggleButton}>
                        {menuOpen ? <X className={navbarStyles.menuIcon} /> : <Menu className={navbarStyles.menuIcon} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Panel */}
            {menuOpen && (
                <div className={navbarStyles.mobileMenuPanel}>
                    {/* <NavLink to='/results' className={navbarStyles.mobileMenuItem} onClick={() => setMenuOpen(false)}>
                        <Award className={navbarStyles.mobileMenuIcon} />
                        My Result
                    </NavLink> */}
                    {loggedIn ? (
                        <button onClick={handleLogout} className={navbarStyles.mobileMenuItem}>
                            <LogOut className={navbarStyles.mobileMenuIcon} />
                            Logout
                        </button>
                    ) : (
                        <NavLink to="/login" className={navbarStyles.mobileMenuItem} onClick={() => setMenuOpen(false)}>
                            <LogIn className={navbarStyles.mobileMenuIcon} />
                            Login
                        </NavLink>
                    )}
                </div>
            )}
            <style>{navbarStyles.animations}</style>
        </nav>
    );
};

export default Navbar;