import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className="container">
                <div className={styles.navbar__content}>
                    <Link to="/" className={styles.navbar__logo}>
                        E-Commerce
                    </Link>

                    <ul className={styles.navbar__links}>
                        <li><Link to="/" className={styles.navbar__link}>Home</Link></li>
                        <li><Link to="/products" className={styles.navbar__link}>Products</Link></li>
                        <li><Link to="/about" className={styles.navbar__link}>About</Link></li>
                        <li><Link to="/contact" className={styles.navbar__link}>Contact</Link></li>
                    </ul>

                    <div className={styles.navbar__actions}>
                        <button className={styles['navbar__action-btn']} aria-label="Search">
                            <Search size={20} />
                        </button>
                        <Link to="/cart" className={styles['navbar__action-btn']} aria-label="Cart">
                            <ShoppingCart size={20} />
                        </Link>
                        <Link to="/account" className={styles['navbar__action-btn']} aria-label="Account">
                            <User size={20} />
                        </Link>
                        <button
                            className={styles.navbar__toggle}
                            onClick={toggleMobileMenu}
                            aria-expanded={isMobileMenuOpen}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className={styles.navbar__mobile_menu}>
                    <div className="container">
                        <ul className={styles.navbar__mobile_links}>
                            <li>
                                <Link
                                    to="/"
                                    className={styles.navbar__mobile_link}
                                    onClick={toggleMobileMenu}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/products"
                                    className={styles.navbar__mobile_link}
                                    onClick={toggleMobileMenu}
                                >
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className={styles.navbar__mobile_link}
                                    onClick={toggleMobileMenu}
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className={styles.navbar__mobile_link}
                                    onClick={toggleMobileMenu}
                                >
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/cart"
                                    className={styles.navbar__mobile_link}
                                    onClick={toggleMobileMenu}
                                >
                                    Cart
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/account"
                                    className={styles.navbar__mobile_link}
                                    onClick={toggleMobileMenu}
                                >
                                    Account
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar; 