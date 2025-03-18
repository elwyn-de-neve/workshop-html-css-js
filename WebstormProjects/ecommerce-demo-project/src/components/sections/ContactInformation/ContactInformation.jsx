import React from 'react';
import { MapPin, Phone, Mail, Clock, Globe } from 'lucide-react';
import styles from './ContactInformation.module.css';

const ContactInformation = () => {
    // This would typically come from a configuration or CMS in a real app
    const contactInfo = {
        address: {
            street: '123 Shopping Street',
            city: 'Amsterdam',
            postalCode: '1000 AA',
            country: 'Netherlands'
        },
        email: 'info@yourecommerce.com',
        phone: '+31 20 123 4567',
        hours: [
            'Monday - Friday: 9:00 AM - 6:00 PM',
            'Saturday: 10:00 AM - 4:00 PM',
            'Sunday: Closed'
        ],
        socialMedia: [
            { name: 'Facebook', url: 'https://facebook.com' },
            { name: 'Instagram', url: 'https://instagram.com' },
            { name: 'Twitter', url: 'https://twitter.com' }
        ]
    };

    return (
        <div className={styles.contactInformation}>
            <h2 className={styles.title}>Contact Information</h2>

            <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                    <MapPin className={styles.infoIcon} />
                    <h3 className={styles.infoTitle}>Our Location</h3>
                    <address className={styles.infoText}>
                        {contactInfo.address.street}<br />
                        {contactInfo.address.city}, {contactInfo.address.postalCode}<br />
                        {contactInfo.address.country}
                    </address>
                </div>

                <div className={styles.infoCard}>
                    <Phone className={styles.infoIcon} />
                    <h3 className={styles.infoTitle}>Phone Number</h3>
                    <p className={styles.infoText}>
                        <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className={styles.infoLink}>
                            {contactInfo.phone}
                        </a>
                    </p>
                </div>

                <div className={styles.infoCard}>
                    <Mail className={styles.infoIcon} />
                    <h3 className={styles.infoTitle}>Email Address</h3>
                    <p className={styles.infoText}>
                        <a href={`mailto:${contactInfo.email}`} className={styles.infoLink}>
                            {contactInfo.email}
                        </a>
                    </p>
                </div>

                <div className={styles.infoCard}>
                    <Clock className={styles.infoIcon} />
                    <h3 className={styles.infoTitle}>Business Hours</h3>
                    <ul className={styles.hoursList}>
                        {contactInfo.hours.map((hour, index) => (
                            <li key={index} className={styles.hoursItem}>{hour}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className={styles.mapContainer}>
                <h3 className={styles.mapTitle}>Find Us On The Map</h3>
                <div className={styles.mapPlaceholder}>
                    <Globe size={48} className={styles.mapIcon} />
                    <p className={styles.mapText}>
                        Interactive map would be embedded here.
                        <br />
                        <small>Using Google Maps or similar service</small>
                    </p>
                </div>
            </div>

            <div className={styles.socialMedia}>
                <h3 className={styles.socialTitle}>Follow Us</h3>
                <div className={styles.socialLinks}>
                    {contactInfo.socialMedia.map((social, index) => (
                        <a
                            key={index}
                            href={social.url}
                            className={styles.socialLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {social.name}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContactInformation; 