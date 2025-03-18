import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductGrid.module.css';

const ProductGrid = ({
    products = [],
    columns = {
        mobile: 1,
        tablet: 2,
        desktop: 4
    },
    gap = 'medium',
    onAddToCart,
    className = '',
    ...props
}) => {
    const gridClasses = [
        styles['product-grid'],
        styles[`product-grid--gap-${gap}`],
        styles[`product-grid--mobile-${columns.mobile}`],
        styles[`product-grid--tablet-${columns.tablet}`],
        styles[`product-grid--desktop-${columns.desktop}`],
        className
    ].filter(Boolean).join(' ');

    return (
        <div className={gridClasses} {...props}>
            {products.map((product) => (
                <div key={product.id} className={styles['product-grid-item']}>
                    <ProductCard
                        {...product}
                        onAddToCart={() => onAddToCart?.(product)}
                    />
                </div>
            ))}
            {/* Add empty divs to maintain grid alignment when items don't fill the last row */}
            {[...Array(4)].map((_, index) => (
                <div
                    key={`empty-${index}`}
                    className={`${styles['product-grid-item']} ${styles['product-grid-item--empty']}`}
                    aria-hidden="true"
                />
            ))}
        </div>
    );
};

export default ProductGrid; 