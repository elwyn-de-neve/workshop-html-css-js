import React from 'react';
import { Star } from 'lucide-react';
import styles from './Rating.module.css';

const Rating = ({
    value = 0,
    max = 5,
    size = 'medium',
    interactive = false,
    onChange,
    className = '',
    ...props
}) => {
    const handleClick = (rating) => {
        if (interactive && onChange) {
            onChange(rating);
        }
    };

    const handleKeyDown = (event, rating) => {
        if (interactive && onChange && (event.key === 'Enter' || event.key === ' ')) {
            event.preventDefault();
            onChange(rating);
        }
    };

    return (
        <div
            className={`${styles.rating} ${styles[`rating--${size}`]} ${className}`}
            role={interactive ? 'radiogroup' : 'presentation'}
            aria-label={interactive ? 'Rating selector' : `Rating: ${value} out of ${max}`}
            {...props}
        >
            {[...Array(max)].map((_, index) => {
                const starValue = index + 1;
                const isFilled = starValue <= value;

                return (
                    <span
                        key={index}
                        className={`
              ${styles.star}
              ${isFilled ? styles['star--filled'] : ''}
              ${interactive ? styles['star--interactive'] : ''}
            `}
                        onClick={() => handleClick(starValue)}
                        onKeyDown={(e) => handleKeyDown(e, starValue)}
                        role={interactive ? 'radio' : 'presentation'}
                        aria-checked={interactive ? isFilled : undefined}
                        tabIndex={interactive ? 0 : -1}
                        data-rating={starValue}
                    >
                        <Star
                            size={size === 'small' ? 16 : size === 'large' ? 24 : 20}
                            fill={isFilled ? 'currentColor' : 'none'}
                            strokeWidth={2}
                        />
                    </span>
                );
            })}
        </div>
    );
};

export default Rating; 