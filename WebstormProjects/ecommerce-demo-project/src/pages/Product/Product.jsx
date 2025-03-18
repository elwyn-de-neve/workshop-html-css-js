import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import styles from './Product.module.css';
import ProductDetails from '../../components/sections/ProductDetails/ProductDetails';
import ProductTabs from '../../components/sections/ProductTabs/ProductTabs';
import RelatedProducts from '../../components/sections/RelatedProducts/RelatedProducts';
import { products } from '../../data/products';
import { categories } from '../../data/categories';

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        // Simulate network request
        setLoading(true);
        setError(null);

        setTimeout(() => {
            try {
                const foundProduct = products.find(p => p.id === parseInt(id));

                if (foundProduct) {
                    setProduct(foundProduct);

                    // Find related products (same category)
                    const related = products
                        .filter(p =>
                            p.id !== foundProduct.id &&
                            p.categoryId === foundProduct.categoryId
                        )
                        .slice(0, 4); // Limit to 4 related products

                    setRelatedProducts(related);
                } else {
                    setError('Product not found');
                }
            } catch (err) {
                setError('Error loading product');
                console.error(err);
            } finally {
                setLoading(false);
            }
        }, 500);
    }, [id]);

    const handleAddToCart = (product, quantity = 1) => {
        // In a real app, you would dispatch to your cart state/context
        console.log('Adding to cart:', product, 'Quantity:', quantity);
        toast.success(`${product.name} added to cart`);
    };

    const handleAddToWishlist = (product) => {
        // In a real app, you would dispatch to your wishlist state/context
        console.log('Adding to wishlist:', product);
        toast.success(`${product.name} added to wishlist`);
    };

    if (loading) {
        return <div className={styles.loadingContainer}>Loading product...</div>;
    }

    if (error) {
        return <div className={styles.errorContainer}>{error}</div>;
    }

    if (!product) {
        return <div className={styles.errorContainer}>Product not found</div>;
    }

    // Get category name for breadcrumbs
    const category = categories.find(c => c.id === product.categoryId);

    return (
        <div className={styles.productPage}>
            <div className={styles.container}>
                <ProductDetails
                    product={product}
                    onAddToCart={handleAddToCart}
                    onAddToWishlist={handleAddToWishlist}
                    category={category}
                />

                <ProductTabs product={product} />

                <RelatedProducts
                    products={relatedProducts}
                    onAddToCart={handleAddToCart}
                />
            </div>
        </div>
    );
};

export default Product; 