import React from 'react';
import styles from './Badge.module.css';

const Badge = ({
    children,
    variant = 'default',
    size = 'medium',
    className = '',
    ...props
}) => {
    const classes = [
        styles.badge,
        styles[`badge--${variant}`],
        styles[`badge--${size}`],
        className
    ].filter(Boolean).join(' ');

    return (
        <span className={classes} {...props}>
            {children}
        </span>
    );
};

export default Badge; 