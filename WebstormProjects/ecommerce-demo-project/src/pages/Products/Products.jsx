import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Products.module.css';
import ProductSearch from '../../components/sections/ProductSearch/ProductSearch';
import ProductFilters from '../../components/sections/ProductFilters/ProductFilters';
import ProductGrid from '../../components/sections/ProductGrid/ProductGrid';

const Products = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);

    // Get initial values from URL parameters
    const initialSearchQuery = queryParams.get('q') || '';
    const initialCategory = queryParams.get('category') || '';

    // Set up state for filters and search
    const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
    const [filters, setFilters] = useState({
        category: initialCategory,
        minPrice: queryParams.get('minPrice') ? Number(queryParams.get('minPrice')) : null,
        maxPrice: queryParams.get('maxPrice') ? Number(queryParams.get('maxPrice')) : null,
        rating: queryParams.get('rating') ? Number(queryParams.get('rating')) : null,
        inStock: queryParams.get('inStock') === 'true',
        isNew: queryParams.get('isNew') === 'true',
        isFeatured: queryParams.get('isFeatured') === 'true'
    });

    // Update URL when filters or search query change
    useEffect(() => {
        const params = new URLSearchParams();

        if (searchQuery) params.set('q', searchQuery);
        if (filters.category) params.set('category', filters.category);
        if (filters.minPrice) params.set('minPrice', filters.minPrice.toString());
        if (filters.maxPrice) params.set('maxPrice', filters.maxPrice.toString());
        if (filters.rating) params.set('rating', filters.rating.toString());
        if (filters.inStock) params.set('inStock', 'true');
        if (filters.isNew) params.set('isNew', 'true');
        if (filters.isFeatured) params.set('isFeatured', 'true');

        const newUrl = `${location.pathname}${params.toString() ? `?${params.toString()}` : ''}`;
        navigate(newUrl, { replace: true });

    }, [searchQuery, filters, navigate, location.pathname]);

    // Handle search query change
    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    // Handle filter changes
    const handleFilterChange = (filterName, value) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [filterName]: value
        }));
    };

    // Handle clearing all filters
    const handleClearFilters = () => {
        setFilters({
            category: '',
            minPrice: null,
            maxPrice: null,
            rating: null,
            inStock: false,
            isNew: false,
            isFeatured: false
        });

        if (!searchQuery) {
            navigate(location.pathname);
        }
    };

    // Get page title based on filters
    const getPageTitle = () => {
        if (searchQuery) {
            return `Search results for "${searchQuery}"`;
        } else if (filters.category) {
            // Capitalize the category name
            const categoryName = filters.category.charAt(0).toUpperCase() + filters.category.slice(1);
            return categoryName;
        } else {
            return 'All Products';
        }
    };

    return (
        <div className={styles.productsPage}>
            <div className={styles.container}>
                <div className={styles.pageHeader}>
                    <h1 className={styles.pageTitle}>{getPageTitle()}</h1>

                    <ProductSearch
                        onSearch={handleSearch}
                        initialValue={searchQuery}
                    />

                    {/* Shown in mobile view */}
                    <div className={styles.mobileFilterContainer}>
                        <ProductFilters
                            onFilterChange={handleFilterChange}
                            activeFilters={filters}
                            onClearFilters={handleClearFilters}
                        />
                    </div>
                </div>

                <div className={styles.pageContent}>
                    {/* Desktop sidebar */}
                    <aside className={styles.filterSidebar}>
                        <ProductFilters
                            onFilterChange={handleFilterChange}
                            activeFilters={filters}
                            onClearFilters={handleClearFilters}
                        />
                    </aside>

                    <main className={styles.productGridContainer}>
                        <ProductGrid
                            searchQuery={searchQuery}
                            filters={filters}
                            category={filters.category}
                        />
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Products; 