import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import styles from './ProductSearch.module.css';

const ProductSearch = ({ onSearch, initialValue = '' }) => {
    const [searchQuery, setSearchQuery] = useState(initialValue);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        onSearch(searchQuery);
    };

    const handleClearSearch = () => {
        setSearchQuery('');
        onSearch('');
    };

    return (
        <div className={styles.searchContainer}>
            <form onSubmit={handleSearchSubmit} className={styles.searchForm}>
                <div className={styles.searchInputWrapper}>
                    <Search size={18} className={styles.searchIcon} />
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className={styles.searchInput}
                    />
                    {searchQuery && (
                        <button
                            type="button"
                            className={styles.clearButton}
                            onClick={handleClearSearch}
                            aria-label="Clear search"
                        >
                            <X size={16} />
                        </button>
                    )}
                </div>
                <button type="submit" className={styles.searchButton}>
                    Search
                </button>
            </form>
        </div>
    );
};

export default ProductSearch; 