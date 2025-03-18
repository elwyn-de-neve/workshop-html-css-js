import React from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './CartItems.module.css';
import Button from '../../ui/Button/Button';

const CartItems = ({ items = [], onUpdateQuantity, onRemoveItem }) => {
    if (!items.length) {
        return (
            <div className={styles.emptyCart}>
                <h2>Your cart is empty</h2>
                <p>Looks like you haven't added any items to your cart yet.</p>
                <Link to="/">
                    <Button variant="primary">Continue Shopping</Button>
                </Link>
            </div>
        );
    }

    const handleQuantityChange = (itemId, newQuantity) => {
        if (newQuantity < 1) return;
        onUpdateQuantity?.(itemId, newQuantity);
    };

    const handleRemoveItem = (itemId) => {
        onRemoveItem?.(itemId);
    };

    return (
        <div className={styles.cartItems}>
            <h2 className={styles.title}>Shopping Cart ({items.length} items)</h2>

            <div className={styles.tableHeader}>
                <div className={styles.productCol}>Product</div>
                <div className={styles.priceCol}>Price</div>
                <div className={styles.quantityCol}>Quantity</div>
                <div className={styles.totalCol}>Total</div>
                <div className={styles.actionCol}></div>
            </div>

            <div className={styles.itemsList}>
                {items.map(item => {
                    const itemTotal = item.price * item.quantity;

                    return (
                        <div key={item.id} className={styles.cartItem}>
                            <div className={styles.productCol}>
                                <div className={styles.productInfo}>
                                    <Link to={`/product/${item.id}`} className={styles.imageWrapper}>
                                        <img src={item.image} alt={item.name} className={styles.productImage} />
                                    </Link>
                                    <div className={styles.productDetails}>
                                        <Link to={`/product/${item.id}`} className={styles.productName}>
                                            {item.name}
                                        </Link>
                                        {item.variant && (
                                            <span className={styles.productVariant}>
                                                {item.variant}
                                            </span>
                                        )}
                                        {item.stock <= 5 && item.stock > 0 && (
                                            <span className={styles.lowStock}>
                                                Only {item.stock} left in stock
                                            </span>
                                        )}
                                        {item.stock === 0 && (
                                            <span className={styles.outOfStock}>
                                                Out of stock
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className={styles.priceCol}>
                                ${item.price.toFixed(2)}
                                {item.regularPrice && item.regularPrice > item.price && (
                                    <span className={styles.originalPrice}>
                                        ${item.regularPrice.toFixed(2)}
                                    </span>
                                )}
                            </div>

                            <div className={styles.quantityCol}>
                                <div className={styles.quantityControl}>
                                    <button
                                        className={styles.quantityButton}
                                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                        disabled={item.quantity <= 1}
                                        aria-label="Decrease quantity"
                                    >
                                        <Minus size={16} />
                                    </button>
                                    <span className={styles.quantityValue}>
                                        {item.quantity}
                                    </span>
                                    <button
                                        className={styles.quantityButton}
                                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                        disabled={item.quantity >= item.stock}
                                        aria-label="Increase quantity"
                                    >
                                        <Plus size={16} />
                                    </button>
                                </div>
                            </div>

                            <div className={styles.totalCol}>
                                ${itemTotal.toFixed(2)}
                            </div>

                            <div className={styles.actionCol}>
                                <button
                                    className={styles.removeButton}
                                    onClick={() => handleRemoveItem(item.id)}
                                    aria-label="Remove item"
                                >
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CartItems; 