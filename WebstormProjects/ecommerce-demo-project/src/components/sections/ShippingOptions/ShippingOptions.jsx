import React from 'react';
import { Truck, Clock, AlertCircle } from 'lucide-react';
import styles from './ShippingOptions.module.css';

const ShippingOptions = ({
    shippingOptions = [],
    selectedOption,
    onSelectOption,
    subtotal = 0
}) => {
    // Add "Free shipping eligible" message if subtotal is over threshold
    const freeShippingThreshold = 100;
    const isFreeShippingEligible = subtotal >= freeShippingThreshold;

    // If no shipping options provided, use default ones
    const defaultOptions = [
        {
            id: 'standard',
            name: 'Standard Shipping',
            description: '3-5 business days',
            price: isFreeShippingEligible ? 0 : 5.99,
            icon: <Truck size={20} />
        },
        {
            id: 'express',
            name: 'Express Shipping',
            description: '1-2 business days',
            price: 14.99,
            icon: <Clock size={20} />
        }
    ];

    const options = shippingOptions.length > 0 ? shippingOptions : defaultOptions;

    return (
        <section className={styles.shippingOptions}>
            <h2 className={styles.title}>Shipping Method</h2>

            {isFreeShippingEligible && (
                <div className={styles.freeShippingMessage}>
                    <Truck size={16} />
                    <span>You've qualified for free standard shipping!</span>
                </div>
            )}

            <div className={styles.optionsList}>
                {options.map((option) => (
                    <div
                        key={option.id}
                        className={`${styles.option} ${selectedOption === option.id ? styles.selected : ''}`}
                        onClick={() => onSelectOption(option.id)}
                    >
                        <div className={styles.optionRadio}>
                            <input
                                type="radio"
                                id={`shipping-${option.id}`}
                                name="shipping-option"
                                checked={selectedOption === option.id}
                                onChange={() => onSelectOption(option.id)}
                                className={styles.radioInput}
                            />
                            <label
                                htmlFor={`shipping-${option.id}`}
                                className={styles.radioLabel}
                            >
                                <span className={styles.radioButton}></span>
                            </label>
                        </div>

                        <div className={styles.optionIcon}>
                            {option.icon}
                        </div>

                        <div className={styles.optionInfo}>
                            <div className={styles.optionName}>{option.name}</div>
                            <div className={styles.optionDescription}>{option.description}</div>
                        </div>

                        <div className={styles.optionPrice}>
                            {option.price === 0 ? (
                                <span className={styles.freeShipping}>Free</span>
                            ) : (
                                <span>${option.price.toFixed(2)}</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.shippingPolicies}>
                <div className={styles.policy}>
                    <AlertCircle size={16} />
                    <span>Orders typically ship within 1-2 business days</span>
                </div>
                <div className={styles.policy}>
                    <AlertCircle size={16} />
                    <span>Delivery times are estimates and are not guaranteed</span>
                </div>
            </div>
        </section>
    );
};

export default ShippingOptions; 