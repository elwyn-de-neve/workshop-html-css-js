import React, { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';
import Button from '../Button/Button';
import styles from './Filter.module.css';

const Filter = ({
    filters = [],
    selectedFilters = {},
    onFilterChange,
    className = '',
}) => {
    const [expandedSections, setExpandedSections] = useState(
        Object.fromEntries(filters.map(filter => [filter.id, true]))
    );

    const handleFilterChange = (filterId, value) => {
        const newFilters = { ...selectedFilters };

        if (Array.isArray(selectedFilters[filterId])) {
            // Toggle value in array for multi-select filters
            const currentValues = selectedFilters[filterId] || [];
            newFilters[filterId] = currentValues.includes(value)
                ? currentValues.filter(v => v !== value)
                : [...currentValues, value];
        } else {
            // Toggle single value for single-select filters
            newFilters[filterId] = selectedFilters[filterId] === value ? null : value;
        }

        onFilterChange(newFilters);
    };

    const toggleSection = (filterId) => {
        setExpandedSections(prev => ({
            ...prev,
            [filterId]: !prev[filterId]
        }));
    };

    const clearFilter = (filterId) => {
        const newFilters = { ...selectedFilters };
        delete newFilters[filterId];
        onFilterChange(newFilters);
    };

    const clearAllFilters = () => {
        onFilterChange({});
    };

    const hasActiveFilters = Object.keys(selectedFilters).length > 0;

    return (
        <div className={`${styles.filter} ${className}`.trim()}>
            <div className={styles['filter-header']}>
                <h3 className={styles['filter-title']}>Filters</h3>
                {hasActiveFilters && (
                    <Button
                        variant="text"
                        size="small"
                        onClick={clearAllFilters}
                        className={styles['clear-all']}
                    >
                        Clear all
                    </Button>
                )}
            </div>

            <div className={styles['filter-sections']}>
                {filters.map((filter) => {
                    const isExpanded = expandedSections[filter.id];
                    const activeValues = selectedFilters[filter.id] || [];
                    const hasActiveValues = Array.isArray(activeValues)
                        ? activeValues.length > 0
                        : activeValues !== null;

                    return (
                        <div
                            key={filter.id}
                            className={`${styles['filter-section']} ${isExpanded ? styles['filter-section--expanded'] : ''
                                }`.trim()}
                        >
                            <button
                                className={styles['section-header']}
                                onClick={() => toggleSection(filter.id)}
                                aria-expanded={isExpanded}
                            >
                                <span className={styles['section-title']}>{filter.label}</span>
                                {hasActiveValues && (
                                    <Button
                                        variant="text"
                                        size="small"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            clearFilter(filter.id);
                                        }}
                                        className={styles['clear-section']}
                                    >
                                        <X size={14} />
                                    </Button>
                                )}
                                <ChevronDown
                                    size={16}
                                    className={styles['section-icon']}
                                />
                            </button>

                            {isExpanded && (
                                <div className={styles['filter-options']}>
                                    {filter.options.map((option) => {
                                        const isSelected = Array.isArray(activeValues)
                                            ? activeValues.includes(option.value)
                                            : activeValues === option.value;

                                        return (
                                            <label
                                                key={option.value}
                                                className={`${styles['filter-option']} ${isSelected ? styles['filter-option--selected'] : ''
                                                    }`.trim()}
                                            >
                                                <input
                                                    type={filter.multiple ? 'checkbox' : 'radio'}
                                                    checked={isSelected}
                                                    onChange={() => handleFilterChange(filter.id, option.value)}
                                                    className={styles['filter-input']}
                                                />
                                                <span className={styles['option-label']}>
                                                    {option.label}
                                                </span>
                                                {option.count !== undefined && (
                                                    <span className={styles['option-count']}>
                                                        ({option.count})
                                                    </span>
                                                )}
                                            </label>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Filter; 