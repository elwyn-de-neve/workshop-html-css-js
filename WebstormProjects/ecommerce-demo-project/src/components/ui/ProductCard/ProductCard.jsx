import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import Card from '../Card/Card';
import Badge from '../Badge/Badge';
import Button from '../Button/Button';
import styles from './ProductCard.module.css';

const ProductCard = ({
    id,
    title,
    price,
    image,
    discount,
    isNew,
    rating,
    onAddToCart,
    className = '',
    ...props
}) => {
    const navigate = useNavigate();
    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(price);

    const discountedPrice = discount
        ? new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(price * (1 - discount / 100))
        : null;

    return (
        <Card
            className={`${styles['product-card']} ${className}`}
            onClick={() => navigate(`/product/${id}`)}
            {...props}
        >
            <div className={styles['product-image-container']}>
                <img
                    src={image}
                    alt={title}
                    className={styles['product-image']}
                />
                {(discount || isNew) && (
                    <div className={styles['product-badges']}>
                        {discount && (
                            <Badge variant="warning" size="small">
                                {discount}% OFF
                            </Badge>
                        )}
                        {isNew && (
                            <Badge variant="primary" size="small">
                                NEW
                            </Badge>
                        )}
                    </div>
                )}
            </div>

            <div className={styles['product-content']}>
                <h3 className={styles['product-title']}>{title}</h3>

                <div className={styles['product-price']}>
                    {discountedPrice ? (
                        <>
                            <span className={styles['price-discounted']}>{discountedPrice}</span>
                            <span className={styles['price-original']}>{formattedPrice}</span>
                        </>
                    ) : (
                        <span>{formattedPrice}</span>
                    )}
                </div>

                {rating && (
                    <div className={styles['product-rating']}>
                        {[...Array(5)].map((_, index) => (
                            <span
                                key={index}
                                className={`${styles.star} ${index < rating ? styles['star-filled'] : ''}`}
                            >
                                ★
                            </span>
                        ))}
                    </div>
                )}

                <Button
                    variant="primary"
                    className={styles['add-to-cart-button']}
                    onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart?.();
                    }}
                >
                    <ShoppingCart size={18} />
                    Add to Cart
                </Button>
            </div>
        </Card>
    );
};

export default ProductCard; 