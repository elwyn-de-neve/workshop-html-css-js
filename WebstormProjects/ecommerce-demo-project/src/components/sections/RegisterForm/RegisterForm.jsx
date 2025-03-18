import React, { useState } from 'react';
import { User, Mail, Lock, Phone } from 'lucide-react';
import styles from './RegisterForm.module.css';
import Input from '../../ui/Input/Input';
import Button from '../../ui/Button/Button';
import Checkbox from '../../ui/Checkbox/Checkbox';

const RegisterForm = ({ onRegister }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        acceptTerms: false
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
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

        // Validate first name
        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required';
        }

        // Validate last name
        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last name is required';
        }

        // Validate email
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        // Validate phone (optional)
        if (formData.phone && !/^\+?[0-9\s-()]{8,}$/.test(formData.phone)) {
            newErrors.phone = 'Phone number is invalid';
        }

        // Validate password
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
        }

        // Validate confirm password
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Please confirm your password';
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        // Validate terms acceptance
        if (!formData.acceptTerms) {
            newErrors.acceptTerms = 'You must accept the terms and conditions';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            onRegister(formData);
        }
    };

    return (
        <div className={styles.registerForm}>
            <h2 className={styles.title}>Create an account</h2>

            <form onSubmit={handleSubmit}>
                <div className={styles.formGrid}>
                    <div className={styles.formGroup}>
                        <label htmlFor="firstName" className={styles.label}>First Name</label>
                        <div className={styles.inputWrapper}>
                            <User size={18} className={styles.inputIcon} />
                            <Input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="First name"
                                className={errors.firstName ? styles.inputError : ''}
                            />
                        </div>
                        {errors.firstName && <p className={styles.errorText}>{errors.firstName}</p>}
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="lastName" className={styles.label}>Last Name</label>
                        <div className={styles.inputWrapper}>
                            <User size={18} className={styles.inputIcon} />
                            <Input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Last name"
                                className={errors.lastName ? styles.inputError : ''}
                            />
                        </div>
                        {errors.lastName && <p className={styles.errorText}>{errors.lastName}</p>}
                    </div>
                </div>

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
                            placeholder="Email address"
                            className={errors.email ? styles.inputError : ''}
                        />
                    </div>
                    {errors.email && <p className={styles.errorText}>{errors.email}</p>}
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="phone" className={styles.label}>Phone (Optional)</label>
                    <div className={styles.inputWrapper}>
                        <Phone size={18} className={styles.inputIcon} />
                        <Input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone number"
                            className={errors.phone ? styles.inputError : ''}
                        />
                    </div>
                    {errors.phone && <p className={styles.errorText}>{errors.phone}</p>}
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
                            placeholder="Password"
                            className={errors.password ? styles.inputError : ''}
                        />
                    </div>
                    {errors.password && <p className={styles.errorText}>{errors.password}</p>}
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="confirmPassword" className={styles.label}>Confirm Password</label>
                    <div className={styles.inputWrapper}>
                        <Lock size={18} className={styles.inputIcon} />
                        <Input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Confirm password"
                            className={errors.confirmPassword ? styles.inputError : ''}
                        />
                    </div>
                    {errors.confirmPassword && <p className={styles.errorText}>{errors.confirmPassword}</p>}
                </div>

                <div className={styles.formGroup}>
                    <div className={styles.checkboxWrapper}>
                        <Checkbox
                            id="acceptTerms"
                            name="acceptTerms"
                            checked={formData.acceptTerms}
                            onChange={handleChange}
                            label="I agree to the Terms and Privacy Policy"
                        />
                    </div>
                    {errors.acceptTerms && <p className={styles.errorText}>{errors.acceptTerms}</p>}
                </div>

                <Button
                    type="submit"
                    variant="primary"
                    className={styles.submitButton}
                >
                    Create Account
                </Button>
            </form>
        </div>
    );
};

export default RegisterForm; 