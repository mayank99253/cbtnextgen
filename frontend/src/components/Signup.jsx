import React, { useState } from 'react'
import { signupStyles } from '../assets/dummyStyles'
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Eye, EyeOff, User, Mail, Lock } from 'lucide-react';

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const Signup = ({ onSignupSuccess = null }) => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const [submitError, setSubmitError] = useState("");
    const [loading, setLoading] = useState(false);

    const API_BASE = "https://cbtnextgen-2.onrender.com"

    const validate = () => {
        const e = {};
        if (!name.trim()) e.name = "Name is required";
        if (!email) e.email = "Email is required";
        else if (!isValidEmail(email)) e.email = "Please enter a valid email";
        if (!password) e.password = "Password is required";
        else if (password.length < 6) e.password = "Min 6 characters required";
        return e;
    };

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        setSubmitError('');
        const v = validate();
        setErrors(v);
        if (Object.keys(v).length) return;
        setLoading(true);

        try {
            const payload = { fullName: name.trim(), email: email.trim().toLowerCase(), password };
            const resp = await fetch(`${API_BASE}/api/auth/signup`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });

            const data = await resp.json();
            if (!resp.ok) {
                setSubmitError(data?.message || "Registration failed");
                return;
            }

            if (data?.token) {
                localStorage.setItem("authToken", data.token);
                localStorage.setItem("currentUser", JSON.stringify(data.user));
            }

            if (typeof onSignupSuccess === "function") onSignupSuccess(data.user);
            navigate('/', { replace: true }); 
        } catch (error) {
            setSubmitError("Network Error. Check your server.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={signupStyles.pageContainer}>
            <div className={signupStyles.bubble1}></div>
            <div className={signupStyles.bubble2}></div>

            <Link to='/login' className={signupStyles.backButton}>
                <ArrowLeft className={signupStyles.backButtonIcon} />
                <span className={signupStyles.backButtonText}>Back</span>
            </Link>

            <div className={signupStyles.animatedBorder}>
                <form onSubmit={handleSubmit} className={signupStyles.formContent} noValidate>
                    <div className={signupStyles.heading}>
                        <div className={signupStyles.headingIcon}>
                            <CheckCircle className={signupStyles.headingIconInner} />
                        </div>
                        <h2 className={signupStyles.headingText}>Sign Up </h2>
                    </div>

                    <p className={signupStyles.subtitle}>
                        Create your account to start your journey with Next Gen Computer Hub
                    </p>

                    {submitError && (
                        <div className={signupStyles.submitError}>{submitError}</div>
                    )}

                    {/* Full Name */}
                    <label className={signupStyles.label}>
                        <span className={signupStyles.labelText}>Full Name</span>
                        <div className={signupStyles.inputContainer}>
                            <span className={signupStyles.inputIcon}>
                                <User className={signupStyles.inputIconInner} />
                            </span>
                            <input
                                type='text'
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                    if(errors.name) setErrors(s => ({...s, name: undefined}));
                                }}
                                className={`${signupStyles.input} ${errors.name ? signupStyles.inputError : ""}`}
                                placeholder='John Doe'
                            />
                        </div>
                        {errors.name && <p className={signupStyles.errorText}>{errors.name}</p>}
                    </label>

                    {/* Email */}
                    <label className={signupStyles.label}>
                        <span className={signupStyles.labelText}>Email Address</span>
                        <div className={signupStyles.inputContainer}>
                            <span className={signupStyles.inputIcon}>
                                <Mail className={signupStyles.inputIconInner} />
                            </span>
                            <input
                                type='email'
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    if(errors.email) setErrors(s => ({...s, email: undefined}));
                                }}
                                className={`${signupStyles.input} ${errors.email ? signupStyles.inputError : ""}`}
                                placeholder='john@example.com'
                            />
                        </div>
                        {errors.email && <p className={signupStyles.errorText}>{errors.email}</p>}
                    </label>

                    {/* Password */}
                    <label className={signupStyles.label}>
                        <span className={signupStyles.labelText}>Password</span>
                        <div className={signupStyles.inputContainer}>
                            <span className={signupStyles.inputIcon}>
                                <Lock className={signupStyles.inputIconInner} />
                            </span>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    if(errors.password) setErrors(s => ({...s, password: undefined}));
                                }}
                                className={`${signupStyles.input} ${errors.password ? signupStyles.inputError : ""}`}
                                placeholder='••••••••'
                            />
                            <button type='button' onClick={() => setShowPassword(!showPassword)} className={signupStyles.passwordToggle}>
                                {showPassword ? <EyeOff className={signupStyles.passwordToggleIcon} /> : <Eye className={signupStyles.passwordToggleIcon} />}
                            </button>
                        </div>
                        {errors.password && <p className={signupStyles.errorText}>{errors.password}</p>}
                    </label>

                    <div className={signupStyles.buttonsContainer}>
                        <button type='submit' disabled={loading} className={signupStyles.submitButton}>
                            {loading ? "Creating Account..." : "Create Account"}
                        </button>
                    </div>
                </form>
            </div>

            <div className={signupStyles.loginPromptContainer}>
                <div className={signupStyles.loginPromptContent}>
                    <span className={signupStyles.loginPromptText}>Already have an account?</span>
                    <Link className={signupStyles.loginPromptLink} to='/login'>Login</Link>
                </div>
            </div>

            <style>{signupStyles.animations}</style>
        </div>
    )
}

export default Signup;