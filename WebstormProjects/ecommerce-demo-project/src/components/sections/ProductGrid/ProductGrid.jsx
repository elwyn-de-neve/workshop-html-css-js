import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import styles from './ProductGrid.module.css';

// Mock product data (in a real app, this would come from API)
const mockProducts = [
    {
        id: 1,
        name: 'Modern Office Desk',
        description: 'Sleek, minimalist desk perfect for home offices and workspaces.',
        price: 249.99,
        discountPrice: 199.99,
        image: '/images/products/desk.jpg',
        category: 'furniture',
        subCategory: 'office',
        rating: 4.5,
        reviews: 127,
        inStock: true,
        isNew: true,
        isFeatured: true,
        colors: ['Black', 'White', 'Walnut'],
        tags: ['desk', 'office', 'workspace', 'modern']
    },
    {
        id: 2,
        name: 'Ergonomic Office Chair',
        description: 'Comfortable chair with lumbar support for long work sessions.',
        price: 199.99,
        discountPrice: null,
        image: '/images/products/chair.jpg',
        category: 'furniture',
        subCategory: 'office',
        rating: 4.7,
        reviews: 95,
        inStock: true,
        isNew: false,
        isFeatured: true,
        colors: ['Black', 'Gray'],
        tags: ['chair', 'office', 'ergonomic', 'comfortable']
    },
    {
        id: 3,
        name: 'Scandinavian Bookshelf',
        description: 'Elegant, minimalist bookshelf with ample storage space.',
        price: 179.99,
        discountPrice: 149.99,
        image: '/images/products/bookshelf.jpg',
        category: 'furniture',
        subCategory: 'storage',
        rating: 4.2,
        reviews: 64,
        inStock: true,
        isNew: false,
        isFeatured: false,
        colors: ['White', 'Oak', 'Black'],
        tags: ['bookshelf', 'storage', 'scandinavian', 'minimal']
    },
    {
        id: 4,
        name: 'Modern Coffee Table',
        description: 'Stylish coffee table with storage compartments and sleek finish.',
        price: 149.99,
        discountPrice: null,
        image: '/images/products/coffee-table.jpg',
        category: 'furniture',
        subCategory: 'living',
        rating: 4.4,
        reviews: 57,
        inStock: false,
        isNew: false,
        isFeatured: true,
        colors: ['Walnut', 'White'],
        tags: ['table', 'coffee table', 'living room', 'modern']
    },
    {
        id: 5,
        name: 'Smart LED Desk Lamp',
        description: 'Adjustable lamp with multiple brightness levels and color temperatures.',
        price: 69.99,
        discountPrice: 59.99,
        image: '/images/products/lamp.jpg',
        category: 'lighting',
        subCategory: 'desk',
        rating: 4.6,
        reviews: 83,
        inStock: true,
        isNew: true,
        isFeatured: false,
        colors: ['Black', 'White'],
        tags: ['lamp', 'lighting', 'desk', 'led', 'smart']
    },
    {
        id: 6,
        name: 'Minimalist Wall Clock',
        description: 'Simple, elegant wall clock that complements any room decor.',
        price: 39.99,
        discountPrice: null,
        image: '/images/products/clock.jpg',
        category: 'decor',
        subCategory: 'wall',
        rating: 4.3,
        reviews: 42,
        inStock: true,
        isNew: false,
        isFeatured: false,
        colors: ['Black', 'White', 'Natural'],
        tags: ['clock', 'wall', 'decor', 'minimalist']
    },
    {
        id: 7,
        name: 'Ceramic Plant Pot Set',
        description: 'Set of 3 ceramic pots in various sizes for indoor plants.',
        price: 34.99,
        discountPrice: 29.99,
        image: '/images/products/plant-pots.jpg',
        category: 'decor',
        subCategory: 'plants',
        rating: 4.8,
        reviews: 76,
        inStock: true,
        isNew: false,
        isFeatured: true,
        colors: ['White', 'Terracotta', 'Gray'],
        tags: ['pot', 'plant', 'ceramic', 'decor']
    },
    {
        id: 8,
        name: 'Modular Sofa',
        description: 'Versatile, modular sofa that can be arranged to fit any space.',
        price: 599.99,
        discountPrice: 499.99,
        image: '/images/products/sofa.jpg',
        category: 'furniture',
        subCategory: 'living',
        rating: 4.9,
        reviews: 112,
        inStock: true,
        isNew: true,
        isFeatured: true,
        colors: ['Gray', 'Blue', 'Beige'],
        tags: ['sofa', 'modular', 'living room', 'seating']
    },
    {
        id: 9,
        name: 'Bamboo Drawer Organizer',
        description: 'Sustainable bamboo organizer to keep drawers neat and tidy.',
        price: 24.99,
        discountPrice: null,
        image: '/images/products/organizer.jpg',
        category: 'storage',
        subCategory: 'organization',
        rating: 4.1,
        reviews: 39,
        inStock: true,
        isNew: false,
        isFeatured: false,
        colors: ['Natural'],
        tags: ['organizer', 'storage', 'bamboo', 'sustainable']
    },
    {
        id: 10,
        name: 'Wool Throw Blanket',
        description: 'Cozy, soft throw blanket made from premium wool.',
        price: 59.99,
        discountPrice: 49.99,
        image: '/images/products/blanket.jpg',
        category: 'textiles',
        subCategory: 'blankets',
        rating: 4.7,
        reviews: 87,
        inStock: true,
        isNew: false,
        isFeatured: true,
        colors: ['Gray', 'Navy', 'Burgundy'],
        tags: ['blanket', 'throw', 'wool', 'cozy', 'soft']
    },
    {
        id: 11,
        name: 'Glass Dining Table',
        description: 'Elegant glass dining table with steel frame.',
        price: 349.99,
        discountPrice: 299.99,
        image: '/images/products/dining-table.jpg',
        category: 'furniture',
        subCategory: 'dining',
        rating: 4.4,
        reviews: 54,
        inStock: true,
        isNew: false,
        isFeatured: false,
        colors: ['Clear/Silver'],
        tags: ['table', 'dining', 'glass', 'modern']
    },
    {
        id: 12,
        name: 'Scented Candle Set',
        description: 'Set of 3 premium scented candles in decorative glass jars.',
        price: 29.99,
        discountPrice: null,
        image: '/images/products/candles.jpg',
        category: 'decor',
        subCategory: 'candles',
        rating: 4.6,
        reviews: 65,
        inStock: true,
        isNew: true,
        isFeatured: false,
        colors: ['Mixed'],
        tags: ['candle', 'scented', 'decor', 'aromatherapy']
    }
];

const ProductGrid = ({
    products = mockProducts,
    filters = {},
    searchQuery = '',
    category = ''
}) => {
    // Apply filters and search query
    const filteredProducts = products.filter(product => {
        // Filter by search query if present
        if (searchQuery &&
            !product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
            !product.description.toLowerCase().includes(searchQuery.toLowerCase()) &&
            !product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))) {
            return false;
        }

        // Filter by category if selected
        if (category && product.category !== category && product.subCategory !== category) {
            return false;
        }

        // Filter by price range if specified
        if (filters.minPrice && product.price < filters.minPrice) {
            return false;
        }
        if (filters.maxPrice && product.price > filters.maxPrice) {
            return false;
        }

        // Filter by availability
        if (filters.inStock && !product.inStock) {
            return false;
        }

        // Filter by rating
        if (filters.rating && product.rating < filters.rating) {
            return false;
        }

        // Filter by new items
        if (filters.isNew && !product.isNew) {
            return false;
        }

        // Filter by featured items
        if (filters.isFeatured && !product.isFeatured) {
            return false;
        }

        return true;
    });

    // Render the product grid
    return (
        <div className={styles.productGrid}>
            {filteredProducts.length === 0 ? (
                <div className={styles.noResults}>
                    <p>No products found matching your criteria.</p>
                </div>
            ) : (
                filteredProducts.map(product => (
                    <div key={product.id} className={styles.productCard}>
                        <div className={styles.imageContainer}>
                            {/* In a real app, this would be an actual image */}
                            <div className={styles.imagePlaceholder}>
                                <span>{product.name}</span>
                            </div>

                            {/* Product badges */}
                            <div className={styles.badges}>
                                {product.isNew && <span className={`${styles.badge} ${styles.newBadge}`}>New</span>}
                                {product.discountPrice && (
                                    <span className={`${styles.badge} ${styles.saleBadge}`}>
                                        Sale
                                    </span>
                                )}
                                {!product.inStock && <span className={`${styles.badge} ${styles.outOfStockBadge}`}>Out of Stock</span>}
                            </div>

                            {/* Quick actions */}
                            <div className={styles.quickActions}>
                                <button
                                    className={styles.actionButton}
                                    disabled={!product.inStock}
                                    aria-label="Add to cart"
                                >
                                    <ShoppingCart size={16} />
                                </button>
                            </div>
                        </div>

                        {/* Product info */}
                        <div className={styles.productInfo}>
                            <Link to={`/product/${product.id}`} className={styles.productLink}>
                                <h3 className={styles.productName}>{product.name}</h3>
                            </Link>

                            <div className={styles.productMeta}>
                                <div className={styles.category}>{product.category}</div>
                                <div className={styles.rating}>
                                    <Star size={14} className={styles.starIcon} />
                                    <span>{product.rating}</span>
                                    <span className={styles.reviewCount}>({product.reviews})</span>
                                </div>
                            </div>

                            <p className={styles.productDescription}>{product.description}</p>

                            <div className={styles.priceContainer}>
                                {product.discountPrice ? (
                                    <>
                                        <span className={styles.originalPrice}>${product.price.toFixed(2)}</span>
                                        <span className={styles.price}>${product.discountPrice.toFixed(2)}</span>
                                    </>
                                ) : (
                                    <span className={styles.price}>${product.price.toFixed(2)}</span>
                                )}
                            </div>

                            <button
                                className={styles.addToCartButton}
                                disabled={!product.inStock}
                            >
                                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default ProductGrid; 