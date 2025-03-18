import React from 'react';
import styles from './SuggestedProducts.module.css';
import ProductCard from '../../ui/ProductCard/ProductCard';

const SuggestedProducts = ({ products = [], cartItems = [], onAddToCart }) => {
    // Filter out products that are already in the cart
    const cartProductIds = cartItems.map(item => item.id);
    const suggestedProducts = products
        .filter(product => !cartProductIds.includes(product.id))
        .slice(0, 3); // Limit to 3 products

    if (suggestedProducts.length === 0) return null;

    return (
        <section className={styles.suggestedProducts}>
            <h2 className={styles.title}>You might also like</h2>

            <div className={styles.productGrid}>
                {suggestedProducts.map(product => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        title={product.name}
                        price={product.price}
                        image={product.images[0]}
                        discount={product.regularPrice > product.price ?
                            Math.round((product.regularPrice - product.price) / product.regularPrice * 100) :
                            null}
                        isNew={product.isNew}
                        rating={product.rating}
                        onAddToCart={() => onAddToCart?.(product)}
                    />
                ))}
            </div>
        </section>
    );
};

export default SuggestedProducts; 