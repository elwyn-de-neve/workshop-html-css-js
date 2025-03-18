import React from 'react';
import { Linkedin, Mail, Twitter } from 'lucide-react';
import styles from './TeamMembers.module.css';

const TeamMembers = () => {
    // In a real app, this data would come from a CMS or backend API
    const teamMembers = [
        {
            id: 1,
            name: 'Sarah Johnson',
            role: 'CEO & Founder',
            bio: 'Sarah founded the company with a vision to create an ecommerce platform focused on quality products and exceptional customer service.',
            image: '/images/team/sarah.jpg',
            social: {
                linkedin: 'https://linkedin.com',
                twitter: 'https://twitter.com',
                email: 'sarah@example.com'
            }
        },
        {
            id: 2,
            name: 'Michael Chen',
            role: 'CTO',
            bio: 'Michael leads our technology team, ensuring our platform is innovative, secure, and provides a seamless shopping experience.',
            image: '/images/team/michael.jpg',
            social: {
                linkedin: 'https://linkedin.com',
                twitter: 'https://twitter.com',
                email: 'michael@example.com'
            }
        },
        {
            id: 3,
            name: 'Emma Rodriguez',
            role: 'Head of Marketing',
            bio: 'Emma crafts our marketing strategy and brand voice, connecting our products with customers who will love them.',
            image: '/images/team/emma.jpg',
            social: {
                linkedin: 'https://linkedin.com',
                twitter: 'https://twitter.com',
                email: 'emma@example.com'
            }
        },
        {
            id: 4,
            name: 'David Kim',
            role: 'Product Manager',
            bio: 'David oversees our product selection, working with suppliers to ensure we offer the best items for our customers.',
            image: '/images/team/david.jpg',
            social: {
                linkedin: 'https://linkedin.com',
                twitter: 'https://twitter.com',
                email: 'david@example.com'
            }
        },
        {
            id: 5,
            name: 'Lisa Patel',
            role: 'Customer Experience Lead',
            bio: 'Lisa ensures every customer interaction exceeds expectations, from browsing to post-purchase support.',
            image: '/images/team/lisa.jpg',
            social: {
                linkedin: 'https://linkedin.com',
                twitter: 'https://twitter.com',
                email: 'lisa@example.com'
            }
        },
        {
            id: 6,
            name: 'James Wilson',
            role: 'Operations Manager',
            bio: 'James optimizes our supply chain and logistics to ensure products reach customers quickly and efficiently.',
            image: '/images/team/james.jpg',
            social: {
                linkedin: 'https://linkedin.com',
                twitter: 'https://twitter.com',
                email: 'james@example.com'
            }
        }
    ];

    return (
        <div className={styles.teamMembers}>
            <h2 className={styles.title}>Meet Our Team</h2>
            <p className={styles.subtitle}>
                The passionate people behind our ecommerce success
            </p>

            <div className={styles.teamGrid}>
                {teamMembers.map(member => (
                    <div key={member.id} className={styles.memberCard}>
                        <div className={styles.memberImageContainer}>
                            {/* In a real app, this would use the actual team member image */}
                            <div className={styles.memberImagePlaceholder}>
                                {member.name.split(' ').map(n => n[0]).join('')}
                            </div>
                        </div>

                        <div className={styles.memberInfo}>
                            <h3 className={styles.memberName}>{member.name}</h3>
                            <p className={styles.memberRole}>{member.role}</p>
                            <p className={styles.memberBio}>{member.bio}</p>

                            <div className={styles.socialLinks}>
                                {member.social.linkedin && (
                                    <a
                                        href={member.social.linkedin}
                                        className={styles.socialLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`LinkedIn profile of ${member.name}`}
                                    >
                                        <Linkedin size={18} />
                                    </a>
                                )}

                                {member.social.twitter && (
                                    <a
                                        href={member.social.twitter}
                                        className={styles.socialLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Twitter profile of ${member.name}`}
                                    >
                                        <Twitter size={18} />
                                    </a>
                                )}

                                {member.social.email && (
                                    <a
                                        href={`mailto:${member.social.email}`}
                                        className={styles.socialLink}
                                        aria-label={`Email ${member.name}`}
                                    >
                                        <Mail size={18} />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamMembers; 