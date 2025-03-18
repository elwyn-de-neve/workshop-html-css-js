import React from 'react';
import { Check } from 'lucide-react';
import styles from './Checkbox.module.css';

const Checkbox = ({
    id,
    name,
    checked = false,
    onChange,
    label,
    required = false,
    disabled = false,
    error = null,
    className = '',
    ...props
}) => {
    const checkboxId = id || `checkbox-${name}-${Math.random().toString(36).substr(2, 9)}`;

    return (
        <div
            className={`${styles['checkbox-container']} ${disabled ? styles['checkbox-container--disabled'] : ''
                } ${className}`}
        >
            <label htmlFor={checkboxId} className={styles['checkbox-label']}>
                <div className={styles['checkbox-wrapper']}>
                    <input
                        type="checkbox"
                        id={checkboxId}
                        name={name}
                        checked={checked}
                        onChange={onChange}
                        disabled={disabled}
                        className={styles['checkbox-input']}
                        {...props}
                    />
                    <div
                        className={`${styles.checkbox} ${checked ? styles['checkbox--checked'] : ''
                            } ${error ? styles['checkbox--error'] : ''} ${disabled ? styles['checkbox--disabled'] : ''
                            }`}
                    >
                        {checked && <Check size={14} className={styles['checkbox-icon']} />}
                    </div>
                </div>
                {label && (
                    <span className={styles['checkbox-text']}>
                        {label}
                        {required && <span className={styles['checkbox-required']}>*</span>}
                    </span>
                )}
            </label>
            {error && <p className={styles['checkbox-error']}>{error}</p>}
        </div>
    );
};

export default Checkbox; 