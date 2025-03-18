import React, { useState } from 'react';
import { CreditCard, Lock } from 'lucide-react';
import styles from './PaymentMethods.module.css';

const PaymentMethods = ({
    onPaymentMethodChange,
    selectedPaymentMethod,
    onCreditCardChange,
    creditCardData = {
        cardNumber: '',
        cardName: '',
        expiryDate: '',
        cvv: ''
    },
    errors = {}
}) => {
    const [showCardForm, setShowCardForm] = useState(
        selectedPaymentMethod === 'credit-card'
    );

    const handlePaymentMethodChange = (method) => {
        onPaymentMethodChange(method);
        setShowCardForm(method === 'credit-card');
    };

    const handleCardInputChange = (e) => {
        const { name, value } = e.target;

        // Format card number with spaces after every 4 digits
        if (name === 'cardNumber') {
            const formattedValue = value
                .replace(/\s/g, '')
                .replace(/(.{4})/g, '$1 ')
                .trim()
                .slice(0, 19); // limit to 16 digits + 3 spaces

            onCreditCardChange({
                ...creditCardData,
                [name]: formattedValue
            });
            return;
        }

        // Format expiry date as MM/YY
        if (name === 'expiryDate') {
            const cleanValue = value.replace(/\D/g, '');
            let formattedValue = cleanValue;

            if (cleanValue.length > 2) {
                formattedValue = `${cleanValue.slice(0, 2)}/${cleanValue.slice(2, 4)}`;
            }

            onCreditCardChange({
                ...creditCardData,
                [name]: formattedValue
            });
            return;
        }

        // For other fields like name, cvv
        onCreditCardChange({
            ...creditCardData,
            [name]: value
        });
    };

    return (
        <section className={styles.paymentMethods}>
            <h2 className={styles.title}>Payment Method</h2>

            <div className={styles.methodsContainer}>
                <div className={styles.paymentOptions}>
                    <div
                        className={`${styles.paymentOption} ${selectedPaymentMethod === 'credit-card' ? styles.selected : ''}`}
                        onClick={() => handlePaymentMethodChange('credit-card')}
                    >
                        <div className={styles.optionRadio}>
                            <input
                                type="radio"
                                id="payment-credit-card"
                                name="payment-method"
                                checked={selectedPaymentMethod === 'credit-card'}
                                onChange={() => handlePaymentMethodChange('credit-card')}
                                className={styles.radioInput}
                            />
                            <label
                                htmlFor="payment-credit-card"
                                className={styles.radioLabel}
                            >
                                <span className={styles.radioButton}></span>
                            </label>
                        </div>
                        <CreditCard size={20} className={styles.optionIcon} />
                        <span>Credit / Debit Card</span>
                    </div>

                    <div
                        className={`${styles.paymentOption} ${selectedPaymentMethod === 'paypal' ? styles.selected : ''}`}
                        onClick={() => handlePaymentMethodChange('paypal')}
                    >
                        <div className={styles.optionRadio}>
                            <input
                                type="radio"
                                id="payment-paypal"
                                name="payment-method"
                                checked={selectedPaymentMethod === 'paypal'}
                                onChange={() => handlePaymentMethodChange('paypal')}
                                className={styles.radioInput}
                            />
                            <label
                                htmlFor="payment-paypal"
                                className={styles.radioLabel}
                            >
                                <span className={styles.radioButton}></span>
                            </label>
                        </div>
                        <span className={styles.paypalLogo}>PayPal</span>
                    </div>
                </div>

                {showCardForm && (
                    <div className={styles.cardForm}>
                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label htmlFor="cardNumber">Card Number</label>
                                <input
                                    type="text"
                                    id="cardNumber"
                                    name="cardNumber"
                                    placeholder="1234 5678 9012 3456"
                                    value={creditCardData.cardNumber}
                                    onChange={handleCardInputChange}
                                    className={errors.cardNumber ? styles.inputError : ''}
                                    maxLength="19"
                                />
                                {errors.cardNumber && (
                                    <div className={styles.errorText}>{errors.cardNumber}</div>
                                )}
                            </div>
                        </div>

                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label htmlFor="cardName">Cardholder Name</label>
                                <input
                                    type="text"
                                    id="cardName"
                                    name="cardName"
                                    placeholder="John Smith"
                                    value={creditCardData.cardName}
                                    onChange={handleCardInputChange}
                                    className={errors.cardName ? styles.inputError : ''}
                                />
                                {errors.cardName && (
                                    <div className={styles.errorText}>{errors.cardName}</div>
                                )}
                            </div>
                        </div>

                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label htmlFor="expiryDate">Expiration Date</label>
                                <input
                                    type="text"
                                    id="expiryDate"
                                    name="expiryDate"
                                    placeholder="MM/YY"
                                    value={creditCardData.expiryDate}
                                    onChange={handleCardInputChange}
                                    className={errors.expiryDate ? styles.inputError : ''}
                                    maxLength="5"
                                />
                                {errors.expiryDate && (
                                    <div className={styles.errorText}>{errors.expiryDate}</div>
                                )}
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="cvv">CVV</label>
                                <input
                                    type="text"
                                    id="cvv"
                                    name="cvv"
                                    placeholder="123"
                                    value={creditCardData.cvv}
                                    onChange={handleCardInputChange}
                                    className={errors.cvv ? styles.inputError : ''}
                                    maxLength="4"
                                />
                                {errors.cvv && (
                                    <div className={styles.errorText}>{errors.cvv}</div>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                <div className={styles.securePayment}>
                    <Lock size={14} />
                    <span>Your payment information is secure and encrypted</span>
                </div>
            </div>
        </section>
    );
};

export default PaymentMethods; 