import React, { useState } from 'react';
import { StarIcon } from 'lucide-react';
import styles from './ProductTabs.module.css';

const ProductTabs = ({ product }) => {
    const [activeTab, setActiveTab] = useState('description');

    if (!product) {
        return null;
    }

    // Format date to readable format
    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    // Render stars for review rating
    const renderStars = (rating) => {
        return Array.from({ length: 5 }).map((_, i) => (
            <StarIcon
                key={i}
                size={16}
                className={i < rating ? styles.starFilled : styles.starEmpty}
            />
        ));
    };

    return (
        <section className={styles.productTabs}>
            <div className={styles.tabsHeader}>
                <button
                    className={`${styles.tabButton} ${activeTab === 'description' ? styles.active : ''}`}
                    onClick={() => setActiveTab('description')}
                >
                    Description
                </button>
                <button
                    className={`${styles.tabButton} ${activeTab === 'specifications' ? styles.active : ''}`}
                    onClick={() => setActiveTab('specifications')}
                >
                    Specifications
                </button>
                <button
                    className={`${styles.tabButton} ${activeTab === 'reviews' ? styles.active : ''}`}
                    onClick={() => setActiveTab('reviews')}
                >
                    Reviews ({product.reviews.length})
                </button>
            </div>

            <div className={styles.tabContent}>
                {activeTab === 'description' && (
                    <div className={styles.descriptionTab}>
                        <div
                            className={styles.description}
                            dangerouslySetInnerHTML={{ __html: product.description }}
                        />
                    </div>
                )}

                {activeTab === 'specifications' && (
                    <div className={styles.specificationsTab}>
                        <table className={styles.specsTable}>
                            <tbody>
                                {Object.entries(product.specifications).map(([key, value]) => (
                                    <tr key={key}>
                                        <th>{key}</th>
                                        <td>{value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {activeTab === 'reviews' && (
                    <div className={styles.reviewsTab}>
                        <div className={styles.reviewsSummary}>
                            <div className={styles.ratingOverview}>
                                <div className={styles.averageRating}>
                                    <span className={styles.ratingNumber}>{product.rating.toFixed(1)}</span>
                                    <div className={styles.ratingStars}>
                                        {renderStars(Math.round(product.rating))}
                                        <span className={styles.reviewCount}>({product.reviewCount} reviews)</span>
                                    </div>
                                </div>

                                <div className={styles.ratingBreakdown}>
                                    {[5, 4, 3, 2, 1].map(rating => {
                                        const count = product.ratingBreakdown[rating] || 0;
                                        const percentage = (count / product.reviewCount) * 100;

                                        return (
                                            <div key={rating} className={styles.ratingBar}>
                                                <span className={styles.ratingLabel}>{rating} stars</span>
                                                <div className={styles.ratingBarContainer}>
                                                    <div
                                                        className={styles.ratingBarFill}
                                                        style={{ width: `${percentage}%` }}
                                                    ></div>
                                                </div>
                                                <span className={styles.ratingCount}>{count}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className={styles.reviewsList}>
                            <h3 className={styles.reviewsTitle}>Customer Reviews</h3>

                            {product.reviews.length > 0 ? (
                                product.reviews.map(review => (
                                    <div key={review.id} className={styles.reviewItem}>
                                        <div className={styles.reviewHeader}>
                                            <h4 className={styles.reviewTitle}>{review.title}</h4>
                                            <div className={styles.reviewStars}>{renderStars(review.rating)}</div>
                                        </div>

                                        <div className={styles.reviewMeta}>
                                            <span className={styles.reviewAuthor}>By {review.author}</span>
                                            <span className={styles.reviewDate}>{formatDate(review.date)}</span>
                                        </div>

                                        <p className={styles.reviewContent}>{review.content}</p>
                                    </div>
                                ))
                            ) : (
                                <p className={styles.noReviews}>This product has no reviews yet.</p>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProductTabs; 