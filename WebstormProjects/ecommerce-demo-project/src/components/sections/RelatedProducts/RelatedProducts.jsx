import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import styles from './RelatedProducts.module.css';
import Button from '../../ui/Button/Button';

const RelatedProducts = ({ products = [], onAddToCart }) => {
    if (products.length === 0) {
        return null;
    }

    // Format price with currency
    const formatPrice = (price) => {
        return `$${price.toFixed(2)}`;
    };

    return (
        <section className={styles.relatedProducts}>
            <h2 className={styles.title}>You May Also Like</h2>

            <div className={styles.productsGrid}>
                {products.map(product => (
                    <div key={product.id} className={styles.productCard}>
                        <Link to={`/product/${product.id}`} className={styles.productLink}>
                            <div className={styles.imageContainer}>
                                <img src={product.images[0]} alt={product.name} className={styles.productImage} />
                                {product.isNew && <span className={styles.newBadge}>New</span>}
                            </div>

                            <div className={styles.productInfo}>
                                <h3 className={styles.productName}>{product.name}</h3>

                                <div className={styles.priceContainer}>
                                    <span className={styles.price}>{formatPrice(product.price)}</span>
                                    {product.regularPrice > product.price && (
                                        <span className={styles.regularPrice}>{formatPrice(product.regularPrice)}</span>
                                    )}
                                </div>
                            </div>
                        </Link>

                        <div className={styles.actionContainer}>
                            <Button
                                variant="secondary"
                                size="small"
                                className={styles.addToCartButton}
                                onClick={() => onAddToCart && onAddToCart(product)}
                            >
                                <ShoppingCart size={16} />
                                Add to Cart
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default RelatedProducts; 