import React from 'react';
import { Target, Award, TrendingUp, Heart } from 'lucide-react';
import styles from './CompanyIntro.module.css';

const CompanyIntro = () => {
    // In a real app, this data might come from a CMS
    const companyValues = [
        {
            icon: <Award size={24} />,
            title: 'Quality',
            description: 'We are committed to providing high-quality products that exceed customer expectations.'
        },
        {
            icon: <Heart size={24} />,
            title: 'Customer-Centric',
            description: 'We put our customers at the heart of everything we do, ensuring exceptional service and care.'
        },
        {
            icon: <TrendingUp size={24} />,
            title: 'Innovation',
            description: 'We continuously explore new ideas and technologies to improve our products and services.'
        },
        {
            icon: <Target size={24} />,
            title: 'Sustainability',
            description: 'We are dedicated to environmentally friendly practices and sustainable business operations.'
        }
    ];

    return (
        <div className={styles.companyIntro}>
            <div className={styles.storySection}>
                <div className={styles.content}>
                    <h2 className={styles.title}>Our Story</h2>
                    <p className={styles.text}>
                        Founded in 2010, our ecommerce store began as a small passion project with a simple mission: to provide high-quality products with exceptional customer service. What started as a modest online shop has since grown into a trusted destination for thousands of customers worldwide.
                    </p>
                    <p className={styles.text}>
                        Our journey has been marked by continuous growth and adaptation to the evolving digital landscape. Through the years, we've maintained our commitment to quality while expanding our product range and enhancing the shopping experience.
                    </p>
                </div>
                <div className={styles.imageContainer}>
                    <div className={styles.imagePlaceholder}>
                        {/* In a real app, this would be an actual image */}
                        <span className={styles.placeholderText}>Company Image</span>
                    </div>
                </div>
            </div>

            <div className={styles.missionVision}>
                <div className={styles.missionBox}>
                    <h3 className={styles.boxTitle}>Our Mission</h3>
                    <p className={styles.boxText}>
                        To provide customers with an exceptional online shopping experience through quality products, competitive prices, and outstanding customer service, while fostering innovation and sustainability in everything we do.
                    </p>
                </div>
                <div className={styles.visionBox}>
                    <h3 className={styles.boxTitle}>Our Vision</h3>
                    <p className={styles.boxText}>
                        To become the most trusted and customer-centric ecommerce platform, recognized globally for our quality, innovation, and commitment to making a positive impact on our communities and the environment.
                    </p>
                </div>
            </div>

            <div className={styles.valuesSection}>
                <h2 className={styles.title}>Our Core Values</h2>
                <div className={styles.valuesGrid}>
                    {companyValues.map((value, index) => (
                        <div key={index} className={styles.valueCard}>
                            <div className={styles.valueIcon}>{value.icon}</div>
                            <h3 className={styles.valueTitle}>{value.title}</h3>
                            <p className={styles.valueDescription}>{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CompanyIntro; 