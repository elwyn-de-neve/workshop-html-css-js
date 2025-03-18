import React, { useState } from 'react';
import { User, Mail, MessageSquare, Send } from 'lucide-react';
import styles from './ContactForm.module.css';
import Input from '../../ui/Input/Input';
import Button from '../../ui/Button/Button';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

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

        // Validate name
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        // Validate email
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        // Validate subject
        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        }

        // Validate message
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 20) {
            newErrors.message = 'Message should be at least 20 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            setIsSubmitting(true);

            // Simulate API call
            setTimeout(() => {
                console.log('Form submitted:', formData);
                setIsSubmitting(false);
                setSubmitSuccess(true);

                // Reset form after successful submission
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });

                // Reset success message after a delay
                setTimeout(() => {
                    setSubmitSuccess(false);
                }, 5000);
            }, 1500);
        }
    };

    return (
        <div className={styles.contactForm}>
            <h2 className={styles.title}>Get in Touch</h2>
            <p className={styles.subtitle}>
                Have a question or feedback? Fill out the form below and we'll get back to you as soon as possible.
            </p>

            {submitSuccess && (
                <div className={styles.successMessage}>
                    <p>Thank you for your message! We'll be in touch shortly.</p>
                </div>
            )}

            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>
                        Name <span className={styles.required}>*</span>
                    </label>
                    <div className={styles.inputWrapper}>
                        <User size={18} className={styles.inputIcon} />
                        <Input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            className={errors.name ? styles.inputError : ''}
                        />
                    </div>
                    {errors.name && <p className={styles.errorText}>{errors.name}</p>}
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>
                        Email <span className={styles.required}>*</span>
                    </label>
                    <div className={styles.inputWrapper}>
                        <Mail size={18} className={styles.inputIcon} />
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your email address"
                            className={errors.email ? styles.inputError : ''}
                        />
                    </div>
                    {errors.email && <p className={styles.errorText}>{errors.email}</p>}
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="subject" className={styles.label}>
                        Subject <span className={styles.required}>*</span>
                    </label>
                    <div className={styles.inputWrapper}>
                        <MessageSquare size={18} className={styles.inputIcon} />
                        <Input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Message subject"
                            className={errors.subject ? styles.inputError : ''}
                        />
                    </div>
                    {errors.subject && <p className={styles.errorText}>{errors.subject}</p>}
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.label}>
                        Message <span className={styles.required}>*</span>
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message"
                        rows={6}
                        className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                    />
                    {errors.message && <p className={styles.errorText}>{errors.message}</p>}
                </div>

                <Button
                    type="submit"
                    variant="primary"
                    className={styles.submitButton}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        'Sending...'
                    ) : (
                        <>
                            Send Message <Send size={16} className={styles.buttonIcon} />
                        </>
                    )}
                </Button>
            </form>
        </div>
    );
};

export default ContactForm; 