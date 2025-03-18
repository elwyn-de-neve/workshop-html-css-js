import React from 'react';
import styles from './Input.module.css';

const Input = ({
    type = 'text',
    label,
    error,
    placeholder,
    value,
    onChange,
    disabled = false,
    required = false,
    className = '',
    id,
    ...props
}) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

    const inputClasses = [
        styles.input,
        error ? styles['input--error'] : '',
        disabled ? styles['input--disabled'] : '',
        className
    ].filter(Boolean).join(' ');

    const containerClasses = [
        styles['input-container'],
        error ? styles['input-container--error'] : ''
    ].filter(Boolean).join(' ');

    return (
        <div className={containerClasses}>
            {label && (
                <label htmlFor={inputId} className={styles['input-label']}>
                    {label}
                    {required && <span className={styles['input-required']}>*</span>}
                </label>
            )}
            <input
                id={inputId}
                type={type}
                className={inputClasses}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                disabled={disabled}
                required={required}
                {...props}
            />
            {error && <span className={styles['input-error-message']}>{error}</span>}
        </div>
    );
};

export default Input; 