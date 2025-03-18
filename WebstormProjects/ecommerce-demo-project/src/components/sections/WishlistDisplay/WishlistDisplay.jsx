import React, { useState } from 'react';
import { Heart, ShoppingCart, Trash2, ShoppingBag } from 'lucide-react';
import styles from './WishlistDisplay.module.css';
import Button from '../../ui/Button/Button';

const WishlistDisplay = () => {
    // Mock wishlist data - in a real app, this would come from an API
    const [wishlistItems, setWishlistItems] = useState([
        {
            id: 1,
            name: 'Wireless Bluetooth Headphones',
            price: 79.99,
            image: '/images/products/headphones.jpg',
            inStock: true
        },
        {
            id: 2,
            name: 'Leather Wallet',
            price: 49.95,
            image: '/images/products/wallet.jpg',
            inStock: true
        },
        {
            id: 3,
            name: 'Smart Watch',
            price: 199.99,
            image: '/images/products/smart-watch.jpg',
            inStock: false
        }
    ]);

    // Function to remove item from wishlist
    const removeFromWishlist = (itemId) => {
        setWishlistItems(wishlistItems.filter(item => item.id !== itemId));
    };

    // Function to add item to cart - in a real app this would interact with cart state/API
    const addToCart = (item) => {
        console.log('Added to cart:', item);
        // Here would be logic to add to cart
        // For now, we'll just remove from wishlist
        removeFromWishlist(item.id);
        // Show success message, etc.
    };

    // Function to add all items to cart
    const addAllToCart = () => {
        const inStockItems = wishlistItems.filter(item => item.inStock);
        console.log('Added all to cart:', inStockItems);
        // Here would be logic to add all to cart
        // For now, we'll just clear the wishlist
        setWishlistItems(wishlistItems.filter(item => !item.inStock));
        // Show success message, etc.
    };

    return (
        <div className={styles.wishlistDisplay}>
            <div className={styles.header}>
                <h2 className={styles.title}>My Wishlist</h2>

                {wishlistItems.length > 0 && (
                    <div className={styles.headerActions}>
                        <Button
                            variant="outline"
                            className={styles.addAllButton}
                            onClick={addAllToCart}
                            disabled={!wishlistItems.some(item => item.inStock)}
                        >
                            <ShoppingCart size={16} />
                            Add All to Cart
                        </Button>
                    </div>
                )}
            </div>

            {wishlistItems.length === 0 ? (
                <div className={styles.emptyState}>
                    <Heart size={40} className={styles.emptyIcon} />
                    <p className={styles.emptyText}>Your wishlist is empty.</p>
                    <Button
                        variant="primary"
                        className={styles.shopButton}
                        onClick={() => window.location.href = '/products'}
                    >
                        <ShoppingBag size={16} />
                        Browse Products
                    </Button>
                </div>
            ) : (
                <div className={styles.wishlistGrid}>
                    {wishlistItems.map(item => (
                        <div key={item.id} className={styles.productCard}>
                            <div className={styles.productImageContainer}>
                                {/* Fallback image if product image is not available */}
                                <div className={styles.productImage}>
                                    <ShoppingBag size={30} />
                                </div>
                            </div>

                            <div className={styles.productInfo}>
                                <h3 className={styles.productName}>{item.name}</h3>
                                <div className={styles.productPrice}>${item.price.toFixed(2)}</div>

                                <div className={styles.productStatus}>
                                    {item.inStock ? (
                                        <span className={styles.inStock}>In Stock</span>
                                    ) : (
                                        <span className={styles.outOfStock}>Out of Stock</span>
                                    )}
                                </div>
                            </div>

                            <div className={styles.productActions}>
                                <Button
                                    variant="primary"
                                    size="small"
                                    className={styles.addButton}
                                    onClick={() => addToCart(item)}
                                    disabled={!item.inStock}
                                >
                                    <ShoppingCart size={16} />
                                    Add to Cart
                                </Button>

                                <button
                                    className={styles.removeButton}
                                    onClick={() => removeFromWishlist(item.id)}
                                    aria-label="Remove from wishlist"
                                >
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default WishlistDisplay; 