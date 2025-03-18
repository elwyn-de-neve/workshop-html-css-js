import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import placeholderImage from '../../../assets/images/placeholder.svg';
import ProductCard from '../../ui/ProductCard/ProductCard';
import styles from './FeaturedProducts.module.css';

// Mock data - replace with actual data from your API
const products = [
    {
        id: 1,
        name: "Classic White Sneakers",
        price: 89.99,
        originalPrice: 119.99,
        image: placeholderImage,
        rating: 4.5,
        reviewCount: 128,
        inStock: true,
        category: "trending"
    },
    {
        id: 2,
        name: "Leather Crossbody Bag",
        price: 149.99,
        originalPrice: 199.99,
        image: placeholderImage,
        rating: 4.8,
        reviewCount: 89,
        inStock: true,
        category: "bestsellers"
    },
    {
        id: 3,
        name: "Vintage Denim Jacket",
        price: 199.99,
        originalPrice: 249.99,
        image: placeholderImage,
        rating: 4.6,
        reviewCount: 156,
        inStock: true,
        category: "trending"
    },
    {
        id: 4,
        name: "Summer Floral Dress",
        price: 79.99,
        originalPrice: 99.99,
        image: placeholderImage,
        rating: 4.7,
        reviewCount: 94,
        inStock: true,
        category: "new-arrivals"
    }
];

const categories = [
    { id: 'all', name: 'All' },
    { id: 'trending', name: 'Trending' },
    { id: 'bestsellers', name: 'Bestsellers' },
    { id: 'new-arrivals', name: 'New Arrivals' }
];

const FeaturedProducts = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const handleCategoryChange = (categoryId) => {
        setActiveCategory(categoryId);
    };

    const filteredProducts = activeCategory === 'all'
        ? products
        : products.filter(product => product.category === activeCategory);

    const handleAddToCart = (productId) => {
        console.log(`Added product ${productId} to cart`);
    };

    return (
        <section className={styles.featured}>
            <div className="container">
                <div className={styles.header}>
                    <div className={styles['header-content']}>
                        <h2 className={styles.title}>Featured Products</h2>
                        <p className={styles.description}>
                            Discover our handpicked selection of trending items and bestsellers
                        </p>
                    </div>
                    <Link to="/products" className={styles['view-all']}>
                        View All Products
                        <ArrowRight size={20} />
                    </Link>
                </div>

                <div className={styles['category-filters']}>
                    {categories.map(category => (
                        <button
                            key={category.id}
                            className={`${styles['filter-button']} ${activeCategory === category.id ? styles.active : ''}`}
                            onClick={() => handleCategoryChange(category.id)}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                <div className={styles.grid}>
                    {filteredProducts.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onAddToCart={() => handleAddToCart(product.id)}
                            className={styles['product-card']}
                        />
                    ))}
                </div>

                <div className={styles['mobile-view-all']}>
                    <Link to="/products" className={styles['mobile-link']}>
                        View All Products
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts; 