import React from 'react';
import { ShoppingCart } from 'lucide-react';
import Button from '../Button/Button';
import Rating from '../Rating/Rating';
import styles from './ProductList.module.css';

const ProductList = ({
    products = [],
    onAddToCart,
    onProductClick,
    className = '',
}) => {
    if (!products.length) {
        return (
            <div className={`${styles['product-list']} ${styles['product-list--empty']} ${className}`.trim()}>
                <p className={styles['empty-message']}>No products found</p>
            </div>
        );
    }

    return (
        <div className={`${styles['product-list']} ${className}`.trim()}>
            {products.map((product) => {
                const {
                    id,
                    name,
                    price,
                    originalPrice,
                    description,
                    image,
                    rating,
                    reviewCount,
                    inStock,
                } = product;

                const discount = originalPrice ? Math.round((1 - price / originalPrice) * 100) : 0;

                return (
                    <div
                        key={id}
                        className={styles['product-item']}
                        onClick={() => onProductClick?.(product)}
                    >
                        <div className={styles['product-image']}>
                            <img src={image} alt={name} />
                            {!inStock && (
                                <div className={styles['out-of-stock']}>
                                    Out of Stock
                                </div>
                            )}
                        </div>

                        <div className={styles['product-details']}>
                            <h3 className={styles['product-title']}>{name}</h3>

                            <div className={styles['product-info']}>
                                <div className={styles['price-section']}>
                                    <span className={styles.price}>${price.toFixed(2)}</span>
                                    {originalPrice && (
                                        <>
                                            <span className={styles['original-price']}>
                                                ${originalPrice.toFixed(2)}
                                            </span>
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
                            </div>

                            <p className={styles.description}>{description}</p>

                            <Button
                                variant="filled"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onAddToCart?.(product);
                                }}
                                disabled={!inStock}
                                className={styles['add-to-cart']}
                            >
                                <ShoppingCart size={18} />
                                {inStock ? 'Add to Cart' : 'Out of Stock'}
                            </Button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ProductList; 