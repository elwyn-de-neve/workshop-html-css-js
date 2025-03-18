import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, ShieldCheck, Truck } from 'lucide-react';
import placeholderImage from '../../../assets/images/placeholder.svg';
import styles from './HeroSection.module.css';

const HeroSection = () => {
    return (
        <section className={styles.hero}>
            <div className="container">
                <div className={styles.hero__content}>
                    <div className={styles.hero__text}>
                        <h1 className={styles.hero__title}>Discover Your Perfect Style</h1>
                        <p className={styles.hero__description}>
                            Explore our latest collection of trendsetting fashion pieces. Find your unique style with up to 40% off on selected items.
                        </p>
                        <div className={styles.cta__buttons}>
                            <Link to="/shop" className={styles.cta__primary}>
                                Shop Now
                                <ArrowRight size={20} />
                            </Link>
                            <Link to="/collections" className={styles.cta__secondary}>
                                View Collections
                            </Link>
                        </div>
                        <div className={styles.hero__features}>
                            <div className={styles.feature}>
                                <Truck size={20} />
                                <span>Free Shipping</span>
                            </div>
                            <div className={styles.feature}>
                                <ShieldCheck size={20} />
                                <span>Secure Payment</span>
                            </div>
                            <div className={styles.feature}>
                                <Calendar size={20} />
                                <span>24/7 Support</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.hero__image}>
                        <img src={placeholderImage} alt="Fashion Collection" className={styles.image} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection; 