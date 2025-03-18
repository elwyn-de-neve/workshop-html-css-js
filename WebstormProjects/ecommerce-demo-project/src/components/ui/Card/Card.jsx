import React from 'react';
import styles from './Card.module.css';

const CardContent = ({ children, className = '', ...props }) => {
    const classes = [
        styles['card-content'],
        className
    ].filter(Boolean).join(' ');

    return (
        <div className={classes} {...props}>
            {children}
        </div>
    );
};

const Card = ({
    children,
    variant = 'default',
    padding = 'medium',
    className = '',
    as: Component = 'div',
    onClick,
    ...props
}) => {
    const classes = [
        styles.card,
        styles[`card--${variant}`],
        styles[`card--padding-${padding}`],
        onClick ? styles['card--clickable'] : '',
        className
    ].filter(Boolean).join(' ');

    return (
        <Component
            className={classes}
            onClick={onClick}
            role={onClick ? 'button' : undefined}
            tabIndex={onClick ? 0 : undefined}
            {...props}
        >
            {children}
        </Component>
    );
};

Card.Content = CardContent;

export default Card; 