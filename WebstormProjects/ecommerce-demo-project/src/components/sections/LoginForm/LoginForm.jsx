import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import styles from './LoginForm.module.css';
import Input from '../../ui/Input/Input';
import Button from '../../ui/Button/Button';

const LoginForm = ({ onLogin }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        // Clear error when user types
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    };

    const validateForm = () => {
        const newErrors = {};

        // Validate email
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        // Validate password
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            onLogin(formData);
        }
    };

    return (
        <div className={styles.loginForm}>
            <h2 className={styles.title}>Login to your account</h2>

            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>Email</label>
                    <div className={styles.inputWrapper}>
                        <Mail size={18} className={styles.inputIcon} />
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className={errors.email ? styles.inputError : ''}
                        />
                    </div>
                    {errors.email && <p className={styles.errorText}>{errors.email}</p>}
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="password" className={styles.label}>Password</label>
                    <div className={styles.inputWrapper}>
                        <Lock size={18} className={styles.inputIcon} />
                        <Input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            className={errors.password ? styles.inputError : ''}
                        />
                    </div>
                    {errors.password && <p className={styles.errorText}>{errors.password}</p>}
                </div>

                <div className={styles.forgotPassword}>
                    <a href="/forgot-password" className={styles.forgotLink}>Forgot password?</a>
                </div>

                <Button
                    type="submit"
                    variant="primary"
                    className={styles.submitButton}
                >
                    Login
                </Button>
            </form>
        </div>
    );
};

export default LoginForm; 