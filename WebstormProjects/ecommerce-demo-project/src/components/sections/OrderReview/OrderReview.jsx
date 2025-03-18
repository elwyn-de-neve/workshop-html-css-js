import React from 'react';
import { ChevronRight, ShoppingBag } from 'lucide-react';
import styles from './OrderReview.module.css';

const OrderReview = ({
    customerInfo = {},
    shippingMethod = {},
    paymentMethod = {},
    cartItems = [],
    subtotal = 0,
    shipping = 0,
    tax = 0,
    total = 0,
    onEditSection
}) => {
    // Format card number to show only last 4 digits
    const formatCardNumber = (cardNumber) => {
        if (!cardNumber) return '';
        const lastFourDigits = cardNumber.replace(/\s/g, '').slice(-4);
        return `•••• •••• •••• ${lastFourDigits}`;
    };

    // Format address for display
    const formatAddress = (info) => {
        if (!info) return '';

        const addressParts = [
            info.street,
            info.apt && info.apt.trim() !== '' ? info.apt : null,
            info.city,
            info.state,
            info.zip,
            info.country
        ].filter(Boolean);

        return addressParts.join(', ');
    };

    return (
        <section className={styles.orderReview}>
            <h2 className={styles.title}>Review Your Order</h2>

            <div className={styles.reviewSections}>
                {/* Customer Information */}
                <div className={styles.reviewSection}>
                    <div className={styles.sectionHeader}>
                        <h3>Customer Information</h3>
                        <button
                            className={styles.editButton}
                            onClick={() => onEditSection('customer')}
                            aria-label="Edit customer information"
                        >
                            Edit <ChevronRight size={16} />
                        </button>
                    </div>

                    <div className={styles.sectionContent}>
                        <div className={styles.infoGroup}>
                            <p className={styles.infoLabel}>Contact</p>
                            <p>{customerInfo.email || 'Not provided'}</p>
                            <p>{customerInfo.phone || 'No phone provided'}</p>
                        </div>

                        <div className={styles.infoGroup}>
                            <p className={styles.infoLabel}>Shipping Address</p>
                            <p>{customerInfo.firstName} {customerInfo.lastName}</p>
                            <p>{formatAddress(customerInfo)}</p>
                        </div>
                    </div>
                </div>

                {/* Shipping Method */}
                <div className={styles.reviewSection}>
                    <div className={styles.sectionHeader}>
                        <h3>Shipping Method</h3>
                        <button
                            className={styles.editButton}
                            onClick={() => onEditSection('shipping')}
                            aria-label="Edit shipping method"
                        >
                            Edit <ChevronRight size={16} />
                        </button>
                    </div>

                    <div className={styles.sectionContent}>
                        <div className={styles.infoGroup}>
                            <p className={styles.methodName}>{shippingMethod.name || 'Not selected'}</p>
                            <p className={styles.methodDescription}>{shippingMethod.description || ''}</p>
                            <p className={styles.methodPrice}>
                                {shippingMethod.price === 0 ?
                                    'Free' :
                                    shippingMethod.price ?
                                        `$${shippingMethod.price.toFixed(2)}` :
                                        ''
                                }
                            </p>
                        </div>
                    </div>
                </div>

                {/* Payment Method */}
                <div className={styles.reviewSection}>
                    <div className={styles.sectionHeader}>
                        <h3>Payment Method</h3>
                        <button
                            className={styles.editButton}
                            onClick={() => onEditSection('payment')}
                            aria-label="Edit payment method"
                        >
                            Edit <ChevronRight size={16} />
                        </button>
                    </div>

                    <div className={styles.sectionContent}>
                        <div className={styles.infoGroup}>
                            {paymentMethod.type === 'credit-card' ? (
                                <>
                                    <p className={styles.methodName}>Credit Card</p>
                                    <p>{formatCardNumber(paymentMethod.cardNumber)}</p>
                                    <p>Expires {paymentMethod.expiryDate || 'MM/YY'}</p>
                                </>
                            ) : paymentMethod.type === 'paypal' ? (
                                <p className={styles.methodName}>PayPal</p>
                            ) : (
                                <p>No payment method selected</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Order Summary */}
                <div className={styles.reviewSection}>
                    <div className={styles.sectionHeader}>
                        <h3>Order Summary</h3>
                        <button
                            className={styles.editButton}
                            onClick={() => onEditSection('cart')}
                            aria-label="Edit order items"
                        >
                            Edit <ChevronRight size={16} />
                        </button>
                    </div>

                    <div className={styles.sectionContent}>
                        <div className={styles.cartSummary}>
                            <div className={styles.cartItemsCount}>
                                <ShoppingBag size={18} />
                                <span>{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}</span>
                            </div>

                            <div className={styles.summaryItems}>
                                <div className={styles.summaryRow}>
                                    <span>Subtotal</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>
                                <div className={styles.summaryRow}>
                                    <span>Shipping</span>
                                    <span>
                                        {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                                    </span>
                                </div>
                                <div className={styles.summaryRow}>
                                    <span>Estimated Tax</span>
                                    <span>${tax.toFixed(2)}</span>
                                </div>
                                <div className={`${styles.summaryRow} ${styles.totalRow}`}>
                                    <span>Total</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.placeOrderContainer}>
                <p className={styles.disclaimer}>
                    By placing your order, you agree to our Terms of Service and Privacy Policy.
                    You also acknowledge that items are subject to availability and delivery times are estimates.
                </p>
            </div>
        </section>
    );
};

export default OrderReview; 