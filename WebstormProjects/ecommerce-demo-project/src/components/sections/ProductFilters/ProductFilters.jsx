import React, { useState } from 'react';
import { Filter, ChevronDown, ChevronUp, X } from 'lucide-react';
import styles from './ProductFilters.module.css';

const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'furniture', name: 'Furniture' },
    { id: 'lighting', name: 'Lighting' },
    { id: 'decor', name: 'Decor' },
    { id: 'storage', name: 'Storage & Organization' },
    { id: 'textiles', name: 'Textiles' },
    { id: 'office', name: 'Office' },
    { id: 'living', name: 'Living Room' },
    { id: 'dining', name: 'Dining Room' }
];

const priceRanges = [
    { id: 'all', min: 0, max: 1000, label: 'All Prices' },
    { id: 'under-50', min: 0, max: 50, label: 'Under $50' },
    { id: '50-100', min: 50, max: 100, label: '$50 - $100' },
    { id: '100-200', min: 100, max: 200, label: '$100 - $200' },
    { id: '200-500', min: 200, max: 500, label: '$200 - $500' },
    { id: 'over-500', min: 500, max: 10000, label: 'Over $500' }
];

const ratingOptions = [
    { value: 4.5, label: '4.5 & Up' },
    { value: 4, label: '4.0 & Up' },
    { value: 3.5, label: '3.5 & Up' },
    { value: 3, label: '3.0 & Up' }
];

const ProductFilters = ({ onFilterChange, activeFilters = {}, onClearFilters }) => {
    const [showMobileFilters, setShowMobileFilters] = useState(false);
    const [expandedSections, setExpandedSections] = useState({
        categories: true,
        price: true,
        rating: true,
        availability: true,
        special: true
    });

    const toggleSection = (section) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const handleCategoryChange = (categoryId) => {
        let newCategory = categoryId === 'all' ? '' : categoryId;
        onFilterChange('category', newCategory);
    };

    const handlePriceRangeChange = (range) => {
        if (range.id === 'all') {
            onFilterChange('minPrice', null);
            onFilterChange('maxPrice', null);
        } else {
            onFilterChange('minPrice', range.min);
            onFilterChange('maxPrice', range.max);
        }
    };

    const handleRatingChange = (rating) => {
        onFilterChange('rating', rating);
    };

    const handleCheckboxChange = (filterName, value) => {
        onFilterChange(filterName, value);
    };

    const toggleMobileFilters = () => {
        setShowMobileFilters(!showMobileFilters);
    };

    // Determine if a filter section has active filters
    const hasCategoryFilter = !!activeFilters.category;
    const hasPriceFilter = !!activeFilters.minPrice || !!activeFilters.maxPrice;
    const hasRatingFilter = !!activeFilters.rating;
    const hasAvailabilityFilter = !!activeFilters.inStock;
    const hasSpecialFilter = !!activeFilters.isNew || !!activeFilters.isFeatured;

    // Count active filters for the mobile badge
    const activeFilterCount = [
        hasCategoryFilter,
        hasPriceFilter,
        hasRatingFilter,
        hasAvailabilityFilter,
        hasSpecialFilter
    ].filter(Boolean).length;

    return (
        <>
            {/* Mobile filters toggle button */}
            <div className={styles.mobileFilterToggle}>
                <button onClick={toggleMobileFilters} className={styles.filterButton}>
                    <Filter size={16} />
                    <span>Filters</span>
                    {activeFilterCount > 0 && (
                        <span className={styles.filterCount}>{activeFilterCount}</span>
                    )}
                </button>
            </div>

            {/* Filters sidebar */}
            <div className={`${styles.filtersContainer} ${showMobileFilters ? styles.showMobile : ''}`}>
                <div className={styles.filtersHeader}>
                    <h3>Filters</h3>
                    {/* Show close button only on mobile */}
                    <button
                        className={styles.closeButton}
                        onClick={toggleMobileFilters}
                        aria-label="Close filters"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Clear filters button */}
                {Object.keys(activeFilters).some(key => activeFilters[key]) && (
                    <button className={styles.clearFiltersButton} onClick={onClearFilters}>
                        Clear all filters
                    </button>
                )}

                {/* Categories section */}
                <div className={styles.filterSection}>
                    <button
                        className={styles.sectionHeader}
                        onClick={() => toggleSection('categories')}
                        aria-expanded={expandedSections.categories}
                    >
                        <h4>Categories</h4>
                        {expandedSections.categories ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>

                    {expandedSections.categories && (
                        <div className={styles.sectionContent}>
                            <ul className={styles.categoryList}>
                                {categories.map(category => (
                                    <li key={category.id}>
                                        <button
                                            className={`${styles.categoryButton} ${(category.id === 'all' && !activeFilters.category) ||
                                                    category.id === activeFilters.category ? styles.active : ''
                                                }`}
                                            onClick={() => handleCategoryChange(category.id)}
                                        >
                                            {category.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* Price range section */}
                <div className={styles.filterSection}>
                    <button
                        className={styles.sectionHeader}
                        onClick={() => toggleSection('price')}
                        aria-expanded={expandedSections.price}
                    >
                        <h4>Price Range</h4>
                        {expandedSections.price ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>

                    {expandedSections.price && (
                        <div className={styles.sectionContent}>
                            <ul className={styles.priceRangeList}>
                                {priceRanges.map(range => {
                                    const isActive =
                                        (range.id === 'all' && !activeFilters.minPrice && !activeFilters.maxPrice) ||
                                        (activeFilters.minPrice === range.min && activeFilters.maxPrice === range.max);

                                    return (
                                        <li key={range.id}>
                                            <button
                                                className={`${styles.priceRangeButton} ${isActive ? styles.active : ''}`}
                                                onClick={() => handlePriceRangeChange(range)}
                                            >
                                                {range.label}
                                            </button>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    )}
                </div>

                {/* Rating section */}
                <div className={styles.filterSection}>
                    <button
                        className={styles.sectionHeader}
                        onClick={() => toggleSection('rating')}
                        aria-expanded={expandedSections.rating}
                    >
                        <h4>Rating</h4>
                        {expandedSections.rating ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>

                    {expandedSections.rating && (
                        <div className={styles.sectionContent}>
                            <ul className={styles.ratingList}>
                                <li>
                                    <button
                                        className={`${styles.ratingButton} ${!activeFilters.rating ? styles.active : ''}`}
                                        onClick={() => handleRatingChange(null)}
                                    >
                                        Any Rating
                                    </button>
                                </li>
                                {ratingOptions.map(option => (
                                    <li key={option.value}>
                                        <button
                                            className={`${styles.ratingButton} ${activeFilters.rating === option.value ? styles.active : ''}`}
                                            onClick={() => handleRatingChange(option.value)}
                                        >
                                            {option.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* Availability section */}
                <div className={styles.filterSection}>
                    <button
                        className={styles.sectionHeader}
                        onClick={() => toggleSection('availability')}
                        aria-expanded={expandedSections.availability}
                    >
                        <h4>Availability</h4>
                        {expandedSections.availability ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>

                    {expandedSections.availability && (
                        <div className={styles.sectionContent}>
                            <div className={styles.checkboxGroup}>
                                <label className={styles.checkboxLabel}>
                                    <input
                                        type="checkbox"
                                        checked={!!activeFilters.inStock}
                                        onChange={e => handleCheckboxChange('inStock', e.target.checked)}
                                        className={styles.checkbox}
                                    />
                                    <span>In Stock Only</span>
                                </label>
                            </div>
                        </div>
                    )}
                </div>

                {/* Special section */}
                <div className={styles.filterSection}>
                    <button
                        className={styles.sectionHeader}
                        onClick={() => toggleSection('special')}
                        aria-expanded={expandedSections.special}
                    >
                        <h4>Special</h4>
                        {expandedSections.special ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>

                    {expandedSections.special && (
                        <div className={styles.sectionContent}>
                            <div className={styles.checkboxGroup}>
                                <label className={styles.checkboxLabel}>
                                    <input
                                        type="checkbox"
                                        checked={!!activeFilters.isNew}
                                        onChange={e => handleCheckboxChange('isNew', e.target.checked)}
                                        className={styles.checkbox}
                                    />
                                    <span>New Arrivals</span>
                                </label>
                            </div>
                            <div className={styles.checkboxGroup}>
                                <label className={styles.checkboxLabel}>
                                    <input
                                        type="checkbox"
                                        checked={!!activeFilters.isFeatured}
                                        onChange={e => handleCheckboxChange('isFeatured', e.target.checked)}
                                        className={styles.checkbox}
                                    />
                                    <span>Featured Items</span>
                                </label>
                            </div>
                        </div>
                    )}
                </div>

                {/* Apply filters button (mobile only) */}
                <div className={styles.mobileApplyFilters}>
                    <button
                        className={styles.applyFiltersButton}
                        onClick={toggleMobileFilters}
                    >
                        Apply Filters
                    </button>
                </div>
            </div>
        </>
    );
};

export default ProductFilters; 