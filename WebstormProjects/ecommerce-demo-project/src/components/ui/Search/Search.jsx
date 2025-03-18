import React, { useState, useRef, useEffect } from 'react';
import { Search as SearchIcon, X, Filter } from 'lucide-react';
import Button from '../Button/Button';
import styles from './Search.module.css';

const Search = ({
    onSearch,
    placeholder = 'Search products...',
    suggestions = [],
    filters = [],
    selectedFilters = [],
    onFilterChange,
    className = '',
    autoFocus = false,
}) => {
    const [query, setQuery] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [showFilters, setShowFilters] = useState(false);
    const inputRef = useRef(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsFocused(false);
                setShowFilters(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        if (autoFocus && inputRef.current) {
            inputRef.current.focus();
        }
    }, [autoFocus]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) {
            onSearch(query.trim());
            setIsFocused(false);
        }
    };

    const handleFilterToggle = (filter) => {
        if (onFilterChange) {
            const newFilters = selectedFilters.includes(filter)
                ? selectedFilters.filter(f => f !== filter)
                : [...selectedFilters, filter];
            onFilterChange(newFilters);
        }
    };

    return (
        <div className={`${styles.search} ${className}`.trim()} ref={dropdownRef}>
            <form onSubmit={handleSubmit} className={styles['search-form']}>
                <div className={styles['search-input-wrapper']}>
                    <SearchIcon
                        size={18}
                        className={styles['search-icon']}
                    />
                    <input
                        ref={inputRef}
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onFocus={() => setIsFocused(true)}
                        placeholder={placeholder}
                        className={styles['search-input']}
                        aria-label="Search"
                    />
                    {query && (
                        <button
                            type="button"
                            onClick={() => {
                                setQuery('');
                                inputRef.current?.focus();
                            }}
                            className={styles['clear-button']}
                            aria-label="Clear search"
                        >
                            <X size={16} />
                        </button>
                    )}
                    {filters.length > 0 && (
                        <Button
                            type="button"
                            variant="outline"
                            className={`${styles['filter-button']} ${showFilters ? styles['filter-button--active'] : ''}`}
                            onClick={() => setShowFilters(!showFilters)}
                            aria-label="Toggle filters"
                        >
                            <Filter size={16} />
                        </Button>
                    )}
                </div>
            </form>

            {(isFocused || showFilters) && (
                <div className={styles['search-dropdown']}>
                    {showFilters && filters.length > 0 && (
                        <div className={styles['filter-section']}>
                            <h3 className={styles['filter-title']}>Filters</h3>
                            <div className={styles['filter-options']}>
                                {filters.map((filter) => (
                                    <Button
                                        key={filter}
                                        variant={selectedFilters.includes(filter) ? 'filled' : 'outline'}
                                        size="small"
                                        onClick={() => handleFilterToggle(filter)}
                                        className={styles['filter-option']}
                                    >
                                        {filter}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    )}

                    {isFocused && query && suggestions.length > 0 && (
                        <div className={styles['suggestions-section']}>
                            <h3 className={styles['suggestions-title']}>Suggestions</h3>
                            <ul className={styles['suggestions-list']}>
                                {suggestions.map((suggestion, index) => (
                                    <li key={index}>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setQuery(suggestion);
                                                onSearch(suggestion);
                                                setIsFocused(false);
                                            }}
                                            className={styles['suggestion-item']}
                                        >
                                            <SearchIcon size={14} />
                                            <span>{suggestion}</span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Search; 