import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './OrderSummary.module.css';
import Button from '../../ui/Button/Button';

const OrderSummary = ({
    cartItems = [],
    showCheckoutButton = true,
    showPromoCode = true,
    linkTo = '/checkout'
}) => {
    const [promoCode, setPromoCode] = useState('');
    const [discountAmount, setDiscountAmount] = useState(0);
    const [discountError, setDiscountError] = useState('');

    // Calculate subtotal from cart items
    const subtotal = cartItems.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);

    // Set example shipping cost (in a real app, this would be calculated based on address, weight, etc)
    const shippingCost = subtotal > 0 ? (subtotal > 100 ? 0 : 5.99) : 0;

    // Apply estimated tax (in a real app, this would be based on location)
    const taxRate = 0.08; // 8% tax rate
    const estimatedTax = subtotal * taxRate;

    // Calculate order total
    const orderTotal = subtotal + shippingCost + estimatedTax - discountAmount;

    const handleApplyPromo = (e) => {
        e.preventDefault();

        if (!promoCode.trim()) {
            setDiscountError('Please enter a promo code');
            return;
        }

        // In a real app, this would call an API to validate the promo code
        // For this demo, we'll just accept "DISCOUNT20" as a valid code
        if (promoCode.toUpperCase() === 'DISCOUNT20') {
            const discount = subtotal * 0.2; // 20% discount
            setDiscountAmount(discount);
            setDiscountError('');
        } else {
            setDiscountError('Invalid or expired promo code');
            setDiscountAmount(0);
        }
    };

    return (
        <div className={styles.orderSummary}>
            <h2 className={styles.title}>Order Summary</h2>

            <div className={styles.summaryItems}>
                <div className={styles.summaryItem}>
                    <span>Subtotal ({cartItems.reduce((count, item) => count + item.quantity, 0)} items)</span>
                    <span>${subtotal.toFixed(2)}</span>
                </div>

                <div className={styles.summaryItem}>
                    <span>Shipping</span>
                    {shippingCost === 0 ? (
                        <span className={styles.freeShipping}>Free</span>
                    ) : (
                        <span>${shippingCost.toFixed(2)}</span>
                    )}
                </div>

                <div className={styles.summaryItem}>
                    <span>Estimated Tax</span>
                    <span>${estimatedTax.toFixed(2)}</span>
                </div>

                {discountAmount > 0 && (
                    <div className={`${styles.summaryItem} ${styles.discount}`}>
                        <span>Discount</span>
                        <span>-${discountAmount.toFixed(2)}</span>
                    </div>
                )}

                <div className={styles.divider}></div>

                <div className={`${styles.summaryItem} ${styles.total}`}>
                    <span>Order Total</span>
                    <span>${orderTotal.toFixed(2)}</span>
                </div>
            </div>

            {shippingCost === 0 && subtotal > 0 && (
                <div className={styles.freeShippingMessage}>
                    You've qualified for free shipping!
                </div>
            )}

            {subtotal > 0 && subtotal < 100 && (
                <div className={styles.shippingUpsell}>
                    Add ${(100 - subtotal).toFixed(2)} more to qualify for free shipping!
                </div>
            )}

            {showPromoCode && (
                <div className={styles.promoCodeSection}>
                    <h3>Promo Code</h3>
                    <form onSubmit={handleApplyPromo} className={styles.promoForm}>
                        <input
                            type="text"
                            className={styles.promoInput}
                            placeholder="Enter promo code"
                            value={promoCode}
                            onChange={(e) => setPromoCode(e.target.value)}
                        />
                        <Button
                            type="submit"
                            variant="secondary"
                            size="small"
                            className={styles.promoButton}
                        >
                            Apply
                        </Button>
                    </form>
                    {discountError && <p className={styles.promoError}>{discountError}</p>}
                    {discountAmount > 0 && <p className={styles.promoSuccess}>Promo code applied!</p>}
                </div>
            )}

            {showCheckoutButton && (
                <div className={styles.checkoutButtonContainer}>
                    <Link to={linkTo} className={styles.checkoutLink}>
                        <Button
                            variant="primary"
                            className={styles.checkoutButton}
                            disabled={cartItems.length === 0}
                        >
                            Proceed to Checkout
                            <ArrowRight size={16} />
                        </Button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default OrderSummary; 