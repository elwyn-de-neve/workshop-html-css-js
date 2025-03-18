import React from 'react';
import { Plus, Minus } from 'lucide-react';
import styles from './QuantitySelector.module.css';

const QuantitySelector = ({
    quantity = 1,
    onChange,
    min = 1,
    max = 99,
    disabled = false
}) => {
    const handleDecrease = () => {
        if (quantity > min && !disabled) {
            onChange(quantity - 1);
        }
    };

    const handleIncrease = () => {
        if (quantity < max && !disabled) {
            onChange(quantity + 1);
        }
    };

    const handleChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value) && value >= min && value <= max && !disabled) {
            onChange(value);
        }
    };

    return (
        <div className={`${styles.quantitySelector} ${disabled ? styles.disabled : ''}`}>
            <button
                type="button"
                className={styles.quantityButton}
                onClick={handleDecrease}
                disabled={quantity <= min || disabled}
                aria-label="Decrease quantity"
            >
                <Minus size={16} />
            </button>

            <input
                type="text"
                value={quantity}
                onChange={handleChange}
                className={styles.quantityInput}
                disabled={disabled}
                min={min}
                max={max}
                aria-label="Quantity"
            />

            <button
                type="button"
                className={styles.quantityButton}
                onClick={handleIncrease}
                disabled={quantity >= max || disabled}
                aria-label="Increase quantity"
            >
                <Plus size={16} />
            </button>
        </div>
    );
};

export default QuantitySelector; 