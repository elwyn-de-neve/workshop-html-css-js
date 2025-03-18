import React, { useState } from 'react';
import { Mail, ArrowRight, Check, X } from 'lucide-react';
import Input from '../../ui/Input/Input';
import Button from '../../ui/Button/Button';
import styles from './Newsletter.module.css';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email) {
            setStatus('error');
            setMessage('Please enter your email address');
            return;
        }

        setStatus('loading');

        // Simulate API call
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            setStatus('success');
            setMessage('Thank you for subscribing!');
            setEmail('');
        } catch (error) {
            setStatus('error');
            setMessage('Something went wrong. Please try again.');
        }
    };

    return (
        <section className={styles.newsletter}>
            <div className="container">
                <div className={styles['content-wrapper']}>
                    <div className={styles.content}>
                        <Mail size={32} className={styles.icon} />
                        <h2 className={styles.title}>
                            Subscribe to Our Newsletter
                        </h2>
                        <p className={styles.description}>
                            Stay updated with our latest offers, new arrivals, and exclusive discounts.
                            Get 10% off on your first order!
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles['input-group']}>
                            <Input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email address"
                                className={styles.input}
                                disabled={status === 'loading' || status === 'success'}
                            />
                            <Button
                                type="submit"
                                variant="primary"
                                className={styles.button}
                                disabled={status === 'loading' || status === 'success'}
                            >
                                {status === 'loading' ? (
                                    'Subscribing...'
                                ) : status === 'success' ? (
                                    <>
                                        Subscribed
                                        <Check size={20} />
                                    </>
                                ) : (
                                    <>
                                        Subscribe
                                        <ArrowRight size={20} />
                                    </>
                                )}
                            </Button>
                        </div>

                        {message && (
                            <div className={`${styles.message} ${styles[status]}`}>
                                {status === 'error' ? <X size={16} /> : <Check size={16} />}
                                {message}
                            </div>
                        )}
                    </form>

                    <p className={styles.privacy}>
                        By subscribing, you agree to our{' '}
                        <Button as="a" href="/privacy" variant="link" className={styles.link}>
                            Privacy Policy
                        </Button>
                        {' '}and{' '}
                        <Button as="a" href="/terms" variant="link" className={styles.link}>
                            Terms of Service
                        </Button>
                    </p>
                </div>

                <div className={styles.decoration}>
                    <div className={styles.circle} />
                    <div className={styles.pattern} />
                </div>
            </div>
        </section>
    );
};

export default Newsletter; 