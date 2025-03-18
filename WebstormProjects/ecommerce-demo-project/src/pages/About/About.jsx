import React from 'react';
import styles from './About.module.css';
import CompanyIntro from '../../components/sections/CompanyIntro';
import TeamMembers from '../../components/sections/TeamMembers';

const About = () => {
    return (
        <div className={styles.aboutPage}>
            <div className={styles.container}>
                <div className={styles.pageHeader}>
                    <h1 className={styles.pageTitle}>About Us</h1>
                    <p className={styles.pageDescription}>
                        Learn more about our company, mission, and the team behind our ecommerce platform
                    </p>
                </div>

                <section className={styles.section}>
                    <CompanyIntro />
                </section>

                <section className={styles.section}>
                    <TeamMembers />
                </section>
            </div>
        </div>
    );
};

export default About; 