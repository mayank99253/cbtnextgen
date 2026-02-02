import React, { useState } from 'react'
import { loginStyles } from '../../assets/dummyStyles'
import { ArrowLeft, Eye, EyeOff, Lock, LogIn, Mail, ShieldCheck } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

const AdminLogin = ({ onLoginSuccess = null }) => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const API_BASE = "https://cbtnextgen-2.onrender.com"

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitError('')
    const validation = validate()
    setErrors(validation)
    if (Object.keys(validation).length) return
    setLoading(true)

    try {
      const payload = { email: email.trim().toLowerCase(), password }
      const resp = await fetch(`${API_BASE}/api/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      let data = null
      try { data = await resp.json() } catch (_) {}

      if (!resp.ok) {
        setSubmitError(data?.message || 'Admin access denied')
        return
      }

      if (data?.token) {
        localStorage.setItem('adminToken', data.token)
        localStorage.setItem('currentAdmin', JSON.stringify(data.admin || { email: payload.email }))
      }

      const admin = data.admin || { email: payload.email }
      window.dispatchEvent(new CustomEvent('adminAuthChanged', { detail: { admin } }))
      if (typeof onLoginSuccess === 'function') onLoginSuccess(admin)
      navigate('/admin/dashboard', { replace: true })
    } catch (err) {
      setSubmitError('Server connection failed')
    } finally {
      setLoading(false)
    }
  }

  const validate = () => {
    const e = {}
    if (!email) e.email = 'Admin ID is required'
    else if (!isValidEmail(email)) e.email = 'Invalid admin email'
    if (!password) e.password = 'Security key is required'
    return e
  }

  return (
    <div className={loginStyles.pageContainer}>
      {/* Background Orbs with Amber/Gold tint for Admin */}
      <div className={`${loginStyles.bubble1} !bg-amber-600/10`}></div>
      <div className={`${loginStyles.bubble2} !bg-indigo-600/10`}></div>

      <Link to="/" className={loginStyles.backButton}>
        <ArrowLeft className={loginStyles.backButtonIcon} />
        <span className={loginStyles.backButtonText}>Exit Portal</span>
      </Link>

      <div className={loginStyles.formContainer}>
        <form onSubmit={handleSubmit} className={loginStyles.formWrapper} noValidate>
          <div className={`${loginStyles.formContent} border-amber-500/20`}>
            
            {/* Admin Header */}
            <div className={loginStyles.heading}>
              <div className={`${loginStyles.headingIcon} !bg-amber-500/10 !border-amber-500/30`}>
                <ShieldCheck className="w-7 h-7 text-amber-500" />
              </div>
              <h2 className={loginStyles.titleText}>Admin Portal</h2>
            </div>
            <p className={loginStyles.subtitle}>
              Unauthorized access is strictly prohibited. Enter your secure credentials.
            </p>

            {submitError && (
              <div className={loginStyles.submitError}>{submitError}</div>
            )}

            {/* Admin Email Field */}
            <label className={loginStyles.label}>
              <span className={loginStyles.labelText}>Administrator ID</span>
              <div className={loginStyles.inputContainer}>
                <span className={loginStyles.inputIcon}>
                  <Mail className={loginStyles.inputIconInner} />
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (errors.email) setErrors((s) => ({ ...s, email: undefined }))
                  }}
                  className={`${loginStyles.input} ${errors.email ? loginStyles.inputError : ""} focus:!ring-amber-500/30 focus:!border-amber-500/50`}
                  placeholder="admin@system.com"
                  required
                />
              </div>
              {errors.email && <p className={loginStyles.errorText}>{errors.email}</p>}
            </label>

            {/* Admin Password Field */}
            <label className={loginStyles.label}>
              <span className={loginStyles.labelText}>Security Key</span>
              <div className={loginStyles.inputContainer}>
                <span className={loginStyles.inputIcon}>
                  <Lock className={loginStyles.inputIconInner} />
                </span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    if (errors.password) setErrors((s) => ({ ...s, password: undefined }))
                  }}
                  className={`${loginStyles.input} ${errors.password ? loginStyles.inputError : ""} focus:!ring-amber-500/30 focus:!border-amber-500/50`}
                  placeholder="••••••••"
                  required
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className={loginStyles.passwordToggle}>
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && <p className={loginStyles.errorText}>{errors.password}</p>}
            </label>

            {/* Submit Admin Button */}
            <button 
              type="submit" 
              className={`${loginStyles.submitButton} !bg-amber-600 hover:!bg-amber-500 !shadow-[0_0_20px_rgba(245,158,11,0.2)]`} 
              disabled={loading}
            >
              {loading ? 'Authenticating...' : (
                <>
                  <ShieldCheck className="w-5 h-5" />
                  <span>Authorize Session</span>
                </>
              )}
            </button>

            {/* Footer Note */}
            <div className="mt-8 text-center">
              <p className="text-[10px] text-gray-600 uppercase tracking-[2px]">
                End-to-End Encrypted Session
              </p>
            </div>

          </div>
        </form>
      </div>

      <style>{loginStyles.animations}</style>
    </div>
  )
}

export default AdminLogin