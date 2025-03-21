import React from 'react';
import styles from './Button.module.css';

const Button = ({
    children,
    variant = 'primary',
    size = 'medium',
    type = 'button',
    className = '',
    disabled = false,
    onClick,
    ...props
}) => {
    // Combine variant, size, disabled state classes with any custom classes
    const buttonClasses = [
        styles.button,
        styles[variant],
        styles[size],
        disabled ? styles.disabled : '',
        className
    ].filter(Boolean).join(' ');

    return (
        <button
            type={type}
            className={buttonClasses}
            disabled={disabled}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button; 