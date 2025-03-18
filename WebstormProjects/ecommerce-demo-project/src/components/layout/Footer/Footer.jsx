import React from 'react';
import { Link } from 'react-router-dom';
import {
    Facebook,
    Twitter,
    Instagram,
    Mail,
    Phone,
    MapPin,
    CreditCard,
    Truck,
    ShieldCheck,
    Clock,
} from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles['footer-features']}>
                    <div className={styles['feature-item']}>
                        <Truck size={24} />
                        <div className={styles['feature-text']}>
                            <h4>Free Shipping</h4>
                            <p>On orders over $50</p>
                        </div>
                    </div>
                    <div className={styles['feature-item']}>
                        <ShieldCheck size={24} />
                        <div className={styles['feature-text']}>
                            <h4>Secure Payment</h4>
                            <p>100% secure payment</p>
                        </div>
                    </div>
                    <div className={styles['feature-item']}>
                        <CreditCard size={24} />
                        <div className={styles['feature-text']}>
                            <h4>Money Back</h4>
                            <p>30 days guarantee</p>
                        </div>
                    </div>
                    <div className={styles['feature-item']}>
                        <Clock size={24} />
                        <div className={styles['feature-text']}>
                            <h4>24/7 Support</h4>
                            <p>Dedicated support</p>
                        </div>
                    </div>
                </div>

                <div className={styles['footer-content']}>
                    <div className={styles['footer-section']}>
                        <h3 className={styles['section-title']}>Shop</h3>
                        <ul className={styles['footer-links']}>
                            <li><Link to="/products">All Products</Link></li>
                            <li><Link to="/categories">Categories</Link></li>
                            <li><Link to="/deals">Deals</Link></li>
                            <li><Link to="/new-arrivals">New Arrivals</Link></li>
                        </ul>
                    </div>

                    <div className={styles['footer-section']}>
                        <h3 className={styles['section-title']}>Customer Service</h3>
                        <ul className={styles['footer-links']}>
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li><Link to="/shipping">Shipping Info</Link></li>
                            <li><Link to="/returns">Returns</Link></li>
                            <li><Link to="/faq">FAQ</Link></li>
                        </ul>
                    </div>

                    <div className={styles['footer-section']}>
                        <h3 className={styles['section-title']}>About Us</h3>
                        <ul className={styles['footer-links']}>
                            <li><Link to="/about">Our Story</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/careers">Careers</Link></li>
                            <li><Link to="/terms">Terms & Conditions</Link></li>
                        </ul>
                    </div>

                    <div className={styles['footer-section']}>
                        <h3 className={styles['section-title']}>Contact Info</h3>
                        <ul className={styles['contact-info']}>
                            <li>
                                <MapPin size={16} />
                                <span>123 Commerce St, City, Country</span>
                            </li>
                            <li>
                                <Phone size={16} />
                                <a href="tel:+1234567890">+1 (234) 567-890</a>
                            </li>
                            <li>
                                <Mail size={16} />
                                <a href="mailto:support@example.com">support@example.com</a>
                            </li>
                        </ul>
                        <div className={styles['social-links']}>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <Facebook size={20} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <Twitter size={20} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles['footer-bottom']}>
                    <div className={styles.copyright}>
                        © {currentYear} Your Store Name. All rights reserved.
                    </div>
                    <div className={styles['payment-methods']}>
                        <span>We Accept:</span>
                        <img src="/images/payment-methods.png" alt="Accepted payment methods" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 