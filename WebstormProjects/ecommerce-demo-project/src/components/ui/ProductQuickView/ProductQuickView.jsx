import React from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import Rating from '../Rating/Rating';
import styles from './ProductQuickView.module.css';

const ProductQuickView = ({
    isOpen,
    onClose,
    product,
    onAddToCart,
    className = '',
}) => {
    if (!product) return null;

    const {
        name,
        price,
        originalPrice,
        description,
        images = [],
        rating,
        reviewCount,
        inStock,
    } = product;

    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    const handlePrevImage = () => {
        setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    };

    const discount = originalPrice ? Math.round((1 - price / originalPrice) * 100) : 0;

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            size="large"
            className={`${styles['quick-view']} ${className}`.trim()}
        >
            <div className={styles['quick-view-content']}>
                <div className={styles['image-section']}>
                    <div className={styles['image-container']}>
                        {images.length > 0 && (
                            <img
                                src={images[currentImageIndex]}
                                alt={`${name} - Image ${currentImageIndex + 1}`}
                                className={styles.image}
                            />
                        )}
                        {images.length > 1 && (
                            <>
                                <button
                                    onClick={handlePrevImage}
                                    className={`${styles['image-nav']} ${styles['image-nav--prev']}`}
                                    aria-label="Previous image"
                                >
                                    <ChevronLeft size={20} />
                                </button>
                                <button
                                    onClick={handleNextImage}
                                    className={`${styles['image-nav']} ${styles['image-nav--next']}`}
                                    aria-label="Next image"
                                >
                                    <ChevronRight size={20} />
                                </button>
                            </>
                        )}
                    </div>
                    {images.length > 1 && (
                        <div className={styles['image-thumbnails']}>
                            {images.map((image, index) => (
                                <button
                                    key={index}
                                    className={`${styles.thumbnail} ${index === currentImageIndex ? styles['thumbnail--active'] : ''
                                        }`}
                                    onClick={() => setCurrentImageIndex(index)}
                                >
                                    <img src={image} alt={`${name} thumbnail ${index + 1}`} />
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <div className={styles['details-section']}>
                    <h2 className={styles.title}>{name}</h2>

                    <div className={styles['price-section']}>
                        <span className={styles.price}>${price.toFixed(2)}</span>
                        {originalPrice && (
                            <>
                                <span className={styles['original-price']}>${originalPrice.toFixed(2)}</span>
                                <span className={styles.discount}>-{discount}%</span>
                            </>
                        )}
                    </div>

                    {rating !== undefined && (
                        <div className={styles['rating-section']}>
                            <Rating value={rating} size="small" />
                            <span className={styles['review-count']}>
                                ({reviewCount} {reviewCount === 1 ? 'review' : 'reviews'})
                            </span>
                        </div>
                    )}

                    <p className={styles.description}>{description}</p>

                    <div className={styles['action-section']}>
                        <Button
                            variant="filled"
                            onClick={() => onAddToCart(product)}
                            disabled={!inStock}
                            className={styles['add-to-cart']}
                        >
                            <ShoppingCart size={18} />
                            {inStock ? 'Add to Cart' : 'Out of Stock'}
                        </Button>
                        {!inStock && (
                            <p className={styles['stock-status']}>
                                This item is currently out of stock
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default ProductQuickView; 