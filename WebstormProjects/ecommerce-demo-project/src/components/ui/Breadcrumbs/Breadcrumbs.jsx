import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import styles from './Breadcrumbs.module.css';

const Breadcrumbs = ({
    items = [],
    showHome = true,
    className = '',
}) => {
    return (
        <nav className={`${styles.breadcrumbs} ${className}`.trim()} aria-label="Breadcrumb">
            <ol className={styles['breadcrumbs-list']}>
                {showHome && (
                    <li className={styles['breadcrumbs-item']}>
                        <Link to="/" className={styles['breadcrumbs-link']}>
                            <Home size={16} />
                            <span className={styles['breadcrumbs-text']}>Home</span>
                        </Link>
                        <ChevronRight size={16} className={styles.separator} aria-hidden="true" />
                    </li>
                )}

                {items.map((item, index) => {
                    const isLast = index === items.length - 1;

                    return (
                        <li
                            key={item.path || index}
                            className={`${styles['breadcrumbs-item']} ${isLast ? styles['breadcrumbs-item--active'] : ''
                                }`.trim()}
                        >
                            {isLast ? (
                                <span className={styles['breadcrumbs-text']} aria-current="page">
                                    {item.label}
                                </span>
                            ) : (
                                <>
                                    <Link
                                        to={item.path}
                                        className={styles['breadcrumbs-link']}
                                    >
                                        <span className={styles['breadcrumbs-text']}>
                                            {item.label}
                                        </span>
                                    </Link>
                                    <ChevronRight
                                        size={16}
                                        className={styles.separator}
                                        aria-hidden="true"
                                    />
                                </>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumbs; 