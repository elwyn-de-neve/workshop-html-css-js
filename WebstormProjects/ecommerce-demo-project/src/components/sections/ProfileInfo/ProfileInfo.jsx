import React, { useState } from 'react';
import { User, Mail, Phone, CalendarDays } from 'lucide-react';
import styles from './ProfileInfo.module.css';
import Input from '../../ui/Input/Input';
import Button from '../../ui/Button/Button';

const ProfileInfo = () => {
    // Mock user data - in a real app, this would come from props or context
    const [userData, setUserData] = useState({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phone: '+1 234 567 890',
        dateJoined: '2023-01-15'
    });

    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({ ...userData });
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

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            // In a real app, this would make an API call to update the user profile
            setUserData({ ...formData });
            setIsEditing(false);
        }
    };

    const handleCancel = () => {
        setFormData({ ...userData });
        setIsEditing(false);
        setErrors({});
    };

    // Format date to a readable string
    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className={styles.profileInfo}>
            <div className={styles.header}>
                <h2 className={styles.title}>Profile Information</h2>
                {!isEditing && (
                    <Button
                        variant="outline"
                        className={styles.editButton}
                        onClick={() => setIsEditing(true)}
                    >
                        Edit Profile
                    </Button>
                )}
            </div>

            {isEditing ? (
                <form onSubmit={handleSubmit} className={styles.form}>
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

                    <div className={styles.actionButtons}>
                        <Button
                            type="button"
                            variant="secondary"
                            onClick={handleCancel}
                            className={styles.cancelButton}
                        >
                            Cancel
                        </Button>

                        <Button
                            type="submit"
                            variant="primary"
                            className={styles.saveButton}
                        >
                            Save Changes
                        </Button>
                    </div>
                </form>
            ) : (
                <div className={styles.profileDetails}>
                    <div className={styles.detailItem}>
                        <User size={20} className={styles.detailIcon} />
                        <div className={styles.detailContent}>
                            <span className={styles.detailLabel}>Name</span>
                            <span className={styles.detailValue}>{userData.firstName} {userData.lastName}</span>
                        </div>
                    </div>

                    <div className={styles.detailItem}>
                        <Mail size={20} className={styles.detailIcon} />
                        <div className={styles.detailContent}>
                            <span className={styles.detailLabel}>Email</span>
                            <span className={styles.detailValue}>{userData.email}</span>
                        </div>
                    </div>

                    <div className={styles.detailItem}>
                        <Phone size={20} className={styles.detailIcon} />
                        <div className={styles.detailContent}>
                            <span className={styles.detailLabel}>Phone</span>
                            <span className={styles.detailValue}>{userData.phone || 'Not provided'}</span>
                        </div>
                    </div>

                    <div className={styles.detailItem}>
                        <CalendarDays size={20} className={styles.detailIcon} />
                        <div className={styles.detailContent}>
                            <span className={styles.detailLabel}>Member Since</span>
                            <span className={styles.detailValue}>{formatDate(userData.dateJoined)}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfileInfo; 