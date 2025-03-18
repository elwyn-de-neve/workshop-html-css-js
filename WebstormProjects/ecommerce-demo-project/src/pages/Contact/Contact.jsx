import React from 'react';
import styles from './Contact.module.css';
import ContactForm from '../../components/sections/ContactForm';
import ContactInformation from '../../components/sections/ContactInformation';

const Contact = () => {
    return (
        <div className={styles.contactPage}>
            <div className={styles.container}>
                <div className={styles.pageHeader}>
                    <h1 className={styles.pageTitle}>Contact Us</h1>
                    <p className={styles.pageDescription}>
                        We're here to help and answer any question you might have. We look forward to hearing from you!
                    </p>
                </div>

                <div className={styles.contactSections}>
                    <div className={styles.formSection}>
                        <ContactForm />
                    </div>

                    <div className={styles.infoSection}>
                        <ContactInformation />
                    </div>
                </div>
            </div>

            {/* FAQ Section could be added here */}
        </div>
    );
};

export default Contact; 