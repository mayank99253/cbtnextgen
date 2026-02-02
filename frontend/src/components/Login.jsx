import React, { useState } from 'react'
import { loginStyles } from '../assets/dummyStyles'
import { ArrowLeft, Eye, EyeOff, Lock, LogIn, Mail, Network } from 'lucide-react'
import { Link, replace, useNavigate } from 'react-router-dom'

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const Login = ({ onloginSucess = null }) => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [submitError, setSubmitError] = useState("");

    const API_BASE = 'https://cbtnextgen-2.onrender.com'

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        setSubmitError('');
        const validation = validate();
        setErrors(validation)
        if (Object.keys(validation).length) return;
        setLoading(true);

        try {
            const payload = { email: email.trim().toLowerCase(), password };
            const resp = await fetch(`${API_BASE}/api/auth/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            let data = null;
            try {
                data = await resp.json();
            } catch (error) {
                //ignore all the errors
            }

            if (!resp.ok) {
                const msg = data?.message || "Login Failed";
                setSubmitError(msg);
                return
            }

            if (data?.token) {
                try {
                    localStorage.setItem('authToken', data.token);
                    localStorage.setItem('currenUser',
                        JSON.stringify(data.user || { email: payload.email })
                    );
                } catch (error) {
                    //ignore all the errors
                }
            }
            const user = data.user || { email: payload.email };
            window.dispatchEvent(
                new CustomEvent("authChanged", { detail: { user } })
            );

            if (typeof onloginSucess === "function") onloginSucess(user);
            navigate('/', { replace: true });

        } catch (error) {
            console.error('login error', error);
            setSubmitError("Network error");
        }
        finally {
            setLoading(false)
        }
    }

    //Email Validation function
    const validate = () => {
        const e = {};
        if (!email) e.email = "Email is required";
        else if (!isValidEmail(email)) e.email = "Please enter a valid email";

        if (!password) e.password = "Password is required";
        return e;
    };
    // ... (imports remain the same)

    return (
        <div className={loginStyles.pageContainer}>
            {/* Background Decorative Blur */}
            <div className={loginStyles.bubble1}></div>
            <div className={loginStyles.bubble2}></div>

            <Link to="/" className={loginStyles.backButton}>
                <ArrowLeft className={loginStyles.backButtonIcon} />
                <span className={loginStyles.backButtonText}>Back to Home</span>
            </Link>

            <div className={loginStyles.formContainer}>
                <form onSubmit={handleSubmit} className={loginStyles.formWrapper} noValidate>
                    <div className={loginStyles.formContent}>
                        {/* Header Section */}
                        <div className={loginStyles.heading}>
                            <div className={loginStyles.headingIcon}>
                                <LogIn className={loginStyles.headingIconInner} />
                            </div>
                            <h2 className={loginStyles.titleText}>Welcome Back</h2>
                        </div>
                        <p className={loginStyles.subtitle}>
                            Sign in to access your dashboard and quizzes.
                        </p>

                        {submitError && (
                            <div className={loginStyles.submitError}>{submitError}</div>
                        )}

                        {/* Email Input */}
                        <label className={loginStyles.label}>
                            <span className={loginStyles.labelText}>Email Address</span>
                            <div className={loginStyles.inputContainer}>
                                <span className={loginStyles.inputIcon}>
                                    <Mail className={loginStyles.inputIconInner} />
                                </span>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        if (errors.email) setErrors(s => ({ ...s, email: undefined }));
                                    }}
                                    className={`${loginStyles.input} ${errors.email ? loginStyles.inputError : ""}`}
                                    placeholder='name@company.com'
                                    required
                                />
                            </div>
                            {errors.email && <p className={loginStyles.errorText}>{errors.email}</p>}
                        </label>

                        {/* Password Input */}
                        <label className={loginStyles.label}>
                            <span className={loginStyles.labelText}>Password</span>
                            <div className={loginStyles.inputContainer}>
                                <span className={loginStyles.inputIcon}>
                                    <Lock className={loginStyles.inputIconInner} />
                                </span>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        if (errors.password) setErrors(s => ({ ...s, password: undefined }));
                                    }}
                                    className={`${loginStyles.input} ${errors.password ? loginStyles.inputError : ""}`}
                                    placeholder='••••••••'
                                    required
                                />
                                <button type='button' onClick={() => setShowPassword(!showPassword)} className={loginStyles.passwordToggle}>
                                    {showPassword ? <EyeOff className={loginStyles.passwordToggleIcon} /> : <Eye className={loginStyles.passwordToggleIcon} />}
                                </button>
                            </div>
                            {errors.password && <p className={loginStyles.errorText}>{errors.password}</p>}
                        </label>

                        {/* Submit Button */}
                        <button type="submit" className={loginStyles.submitButton} disabled={loading}>
                            {loading ? "Verifying..." : (
                                <>
                                    <LogIn className={loginStyles.submitButtonIcon} />
                                    <span>Sign In</span>
                                </>
                            )}
                        </button>

                        {/* Footer Links */}
                        <div className={loginStyles.signupContainer}>
                            <div className={loginStyles.signupContent}>
                                <span className={loginStyles.signupText}>New member?</span>
                                <Link to="/signup" className={loginStyles.signupLink}>Create Account</Link>
                            </div>

                            {/* Admin Specific Place - Modern Styled Box */}
                            <div className={loginStyles.adminBox}>
                                <Link to="/admin/login" className={loginStyles.adminLink}>
                                    <Network className="w-4 h-4" />
                                    Admin Secure Portal
                                </Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <style>{loginStyles.animations}</style>
        </div>
    )
}

export default Login