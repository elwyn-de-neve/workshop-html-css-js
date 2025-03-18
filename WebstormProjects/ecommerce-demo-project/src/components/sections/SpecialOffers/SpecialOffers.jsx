import React, { useState, useEffect } from 'react';
import { Timer, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import placeholderImage from '../../../assets/images/placeholder.svg';
import Button from '../../ui/Button/Button';
import Card from '../../ui/Card/Card';
import Badge from '../../ui/Badge/Badge';
import styles from './SpecialOffers.module.css';

const calculateTimeLeft = (endDate) => {
    const difference = +new Date(endDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }

    return timeLeft;
};

const offers = [
    {
        id: 1,
        title: "Summer Sale",
        description: "Up to 70% off on summer collection",
        image: placeholderImage,
        discount: "70%",
        endDate: "2024-06-30",
        link: "/sale/summer"
    },
    {
        id: 2,
        title: "Flash Deal",
        description: "24 hours only - Special prices on selected items",
        image: placeholderImage,
        discount: "50%",
        endDate: "2024-03-15",
        link: "/sale/flash"
    }
];

const SpecialOffers = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(offers[0].endDate));

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(offers[0].endDate));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className={styles.offers}>
            <div className="container">
                <div className={styles.header}>
                    <div className={styles['header-content']}>
                        <h2 className={styles.title}>Special Offers</h2>
                        <p className={styles.description}>
                            Don't miss out on these amazing deals
                        </p>
                    </div>
                    <Button
                        as={Link}
                        to="/offers"
                        variant="link"
                        className={styles['view-all']}
                    >
                        View All Offers
                        <ArrowRight size={20} />
                    </Button>
                </div>

                <div className={styles.grid}>
                    {offers.map((offer) => (
                        <Card
                            key={offer.id}
                            as={Link}
                            to={offer.link}
                            variant="elevated"
                            padding="none"
                            className={styles['offer-card']}
                        >
                            <div className={styles['image-container']}>
                                <img
                                    src={offer.image}
                                    alt={offer.title}
                                    className={styles.image}
                                />
                                <div className={styles.overlay}>
                                    <Badge variant="primary" className={styles.discount}>
                                        -{offer.discount}
                                    </Badge>
                                </div>
                            </div>
                            <Card.Content className={styles.content}>
                                <h3 className={styles['offer-title']}>{offer.title}</h3>
                                <p className={styles['offer-description']}>{offer.description}</p>

                                <div className={styles.countdown}>
                                    <Timer size={20} className={styles['timer-icon']} />
                                    <div className={styles['countdown-items']}>
                                        {Object.keys(timeLeft).map(interval => (
                                            <div key={interval} className={styles['countdown-item']}>
                                                <span className={styles.number}>
                                                    {String(timeLeft[interval]).padStart(2, '0')}
                                                </span>
                                                <span className={styles.label}>
                                                    {interval}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <span className={styles['shop-now']}>
                                    Shop Now
                                    <ArrowRight size={16} />
                                </span>
                            </Card.Content>
                        </Card>
                    ))}
                </div>

                <div className={styles['mobile-view-all']}>
                    <Button
                        as={Link}
                        to="/offers"
                        variant="primary"
                        className={styles['mobile-link']}
                    >
                        View All Offers
                        <ArrowRight size={20} />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default SpecialOffers; 