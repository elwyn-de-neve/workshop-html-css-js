import React, { useState } from 'react';
import styles from './ProductDescription.module.css';
import Rating from '../../ui/Rating/Rating';

const ProductDescription = ({ product }) => {
    const [activeTab, setActiveTab] = useState('description');

    if (!product) return null;

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <section className={styles.productDescription}>
            <div className={styles.tabs}>
                <button
                    className={`${styles.tab} ${activeTab === 'description' ? styles.active : ''}`}
                    onClick={() => handleTabChange('description')}
                >
                    Description
                </button>
                <button
                    className={`${styles.tab} ${activeTab === 'specifications' ? styles.active : ''}`}
                    onClick={() => handleTabChange('specifications')}
                >
                    Specifications
                </button>
                <button
                    className={`${styles.tab} ${activeTab === 'reviews' ? styles.active : ''}`}
                    onClick={() => handleTabChange('reviews')}
                >
                    Reviews ({product.reviews?.length || 0})
                </button>
            </div>

            <div className={styles.tabContent}>
                {activeTab === 'description' && (
                    <div className={styles.description}>
                        <h2>Product Description</h2>
                        <div dangerouslySetInnerHTML={{ __html: product.description }} />
                    </div>
                )}

                {activeTab === 'specifications' && (
                    <div className={styles.specifications}>
                        <h2>Product Specifications</h2>
                        {product.specifications && (
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
                        )}
                    </div>
                )}

                {activeTab === 'reviews' && (
                    <div className={styles.reviews}>
                        <div className={styles.reviewsSummary}>
                            <h2>Customer Reviews</h2>
                            <div className={styles.ratingOverview}>
                                <div className={styles.averageRating}>
                                    <span className={styles.ratingValue}>{product.rating.toFixed(1)}</span>
                                    <Rating value={product.rating} size="large" />
                                    <span className={styles.reviewCount}>
                                        Based on {product.reviewCount} reviews
                                    </span>
                                </div>

                                <div className={styles.ratingBreakdown}>
                                    {[5, 4, 3, 2, 1].map((star) => {
                                        const count = product.ratingBreakdown?.[star] || 0;
                                        const percentage = product.reviewCount
                                            ? (count / product.reviewCount) * 100
                                            : 0;

                                        return (
                                            <div key={star} className={styles.ratingBar}>
                                                <span className={styles.star}>{star} star</span>
                                                <div className={styles.barContainer}>
                                                    <div
                                                        className={styles.barFill}
                                                        style={{ width: `${percentage}%` }}
                                                    ></div>
                                                </div>
                                                <span className={styles.barPercentage}>
                                                    {percentage.toFixed(0)}%
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className={styles.reviewsList}>
                            {product.reviews && product.reviews.length > 0 ? (
                                product.reviews.map((review) => (
                                    <div key={review.id} className={styles.reviewItem}>
                                        <div className={styles.reviewHeader}>
                                            <h3 className={styles.reviewTitle}>{review.title}</h3>
                                            <Rating value={review.rating} size="small" />
                                        </div>
                                        <div className={styles.reviewMeta}>
                                            <span className={styles.reviewer}>
                                                By {review.author}
                                            </span>
                                            <span className={styles.reviewDate}>
                                                {new Date(review.date).toLocaleDateString()}
                                            </span>
                                        </div>
                                        <p className={styles.reviewContent}>{review.content}</p>
                                    </div>
                                ))
                            ) : (
                                <p className={styles.noReviews}>
                                    This product has no reviews yet. Be the first to leave a review!
                                </p>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProductDescription; 