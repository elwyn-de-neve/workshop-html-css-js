import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Button from '../Button/Button';
import styles from './Pagination.module.css';

const Pagination = ({
    currentPage = 1,
    totalPages = 1,
    onPageChange,
    className = '',
    showFirstLast = true,
    maxVisiblePages = 5,
}) => {
    const getPageNumbers = () => {
        const pages = [];
        const halfVisible = Math.floor(maxVisiblePages / 2);
        let start = Math.max(1, currentPage - halfVisible);
        let end = Math.min(totalPages, start + maxVisiblePages - 1);

        if (end - start + 1 < maxVisiblePages) {
            start = Math.max(1, end - maxVisiblePages + 1);
        }

        // Add first page
        if (showFirstLast && start > 1) {
            pages.push(1);
            if (start > 2) pages.push('...');
        }

        // Add visible pages
        for (let i = start; i <= end; i++) {
            pages.push(i);
        }

        // Add last page
        if (showFirstLast && end < totalPages) {
            if (end < totalPages - 1) pages.push('...');
            pages.push(totalPages);
        }

        return pages;
    };

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages && page !== currentPage) {
            onPageChange(page);
        }
    };

    if (totalPages <= 1) return null;

    return (
        <nav className={`${styles.pagination} ${className}`.trim()} aria-label="Pagination">
            <Button
                variant="outline"
                className={styles['pagination-button']}
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Previous page"
            >
                <ChevronLeft size={16} />
            </Button>

            <div className={styles['pagination-numbers']}>
                {getPageNumbers().map((page, index) => (
                    page === '...' ? (
                        <span key={`dots-${index}`} className={styles['pagination-dots']}>...</span>
                    ) : (
                        <Button
                            key={page}
                            variant={currentPage === page ? 'filled' : 'outline'}
                            className={`${styles['pagination-button']} ${currentPage === page ? styles['pagination-button--active'] : ''
                                }`.trim()}
                            onClick={() => handlePageChange(page)}
                            aria-label={`Page ${page}`}
                            aria-current={currentPage === page ? 'page' : undefined}
                        >
                            {page}
                        </Button>
                    )
                ))}
            </div>

            <Button
                variant="outline"
                className={styles['pagination-button']}
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Next page"
            >
                <ChevronRight size={16} />
            </Button>
        </nav>
    );
};

export default Pagination; 