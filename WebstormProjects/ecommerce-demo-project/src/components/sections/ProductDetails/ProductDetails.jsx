import React, { useState } from 'react';
import { ShoppingCart, Heart, Share2, Star, StarHalf, Truck } from 'lucide-react';
import styles from './ProductDetails.module.css';
import Button from '../../ui/Button/Button';
import QuantitySelector from '../../ui/QuantitySelector/QuantitySelector';

const ProductDetails = ({
    product,
    onAddToCart,
    onAddToWishlist
}) => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedVariant, setSelectedVariant] = useState(
        product?.variants?.length > 0 ? product.variants[0].id : null
    );
    const [quantity, setQuantity] = useState(1);

    if (!product) {
        return <div className={styles.loading}>Loading product...</div>;
    }

    const handleAddToCart = () => {
        if (onAddToCart) {
            onAddToCart({
                ...product,
                quantity,
                selectedVariant: product.variants.find(v => v.id === selectedVariant) || null
            });
        }
    };

    const handleAddToWishlist = () => {
        if (onAddToWishlist) {
            onAddToWishlist(product);
        }
    };

    const handleQuantityChange = (newQuantity) => {
        setQuantity(newQuantity);
    };

    // Calculate discount percentage if there's a sale
    const discountPercentage = product.regularPrice > product.price
        ? Math.round(((product.regularPrice - product.price) / product.regularPrice) * 100)
        : 0;

    // Format price with currency
    const formatPrice = (price) => {
        return `$${price.toFixed(2)}`;
    };

    // Generate JSX for rating stars
    const renderRatingStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

        for (let i = 1; i <= 5; i++) {
            if (i <= fullStars) {
                stars.push(<Star key={i} size={16} className={styles.starFilled} />);
            } else if (i === fullStars + 1 && hasHalfStar) {
                stars.push(<StarHalf key={i} size={16} className={styles.starFilled} />);
            } else {
                stars.push(<Star key={i} size={16} className={styles.starEmpty} />);
            }
        }

        return stars;
    };

    // Check if selected variant is in stock
    const isCurrentVariantInStock = () => {
        if (!selectedVariant || !product.variants || product.variants.length === 0) {
            return product.stock > 0;
        }

        const variant = product.variants.find(v => v.id === selectedVariant);
        return variant && variant.inStock;
    };

    return (
        <section className={styles.productDetails}>
            <div className={styles.productGallery}>
                <div className={styles.mainImage}>
                    <img
                        src={product.images[selectedImage]}
                        alt={product.name}
                        className={styles.featuredImage}
                    />
                    {product.isNew && (
                        <span className={styles.newBadge}>New</span>
                    )}
                    {discountPercentage > 0 && (
                        <span className={styles.saleBadge}>{discountPercentage}% OFF</span>
                    )}
                </div>

                <div className={styles.thumbnails}>
                    {product.images.map((image, index) => (
                        <div
                            key={index}
                            className={`${styles.thumbnail} ${selectedImage === index ? styles.selected : ''}`}
                            onClick={() => setSelectedImage(index)}
                        >
                            <img src={image} alt={`${product.name} - Image ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.productInfo}>
                <h1 className={styles.productName}>{product.name}</h1>

                <div className={styles.ratingContainer}>
                    <div className={styles.stars}>
                        {renderRatingStars(product.rating)}
                    </div>
                    <span className={styles.reviewCount}>{product.reviewCount} reviews</span>
                    <span className={styles.sku}>SKU: {product.sku}</span>
                </div>

                <div className={styles.pricing}>
                    <div className={styles.priceWrapper}>
                        <span className={styles.currentPrice}>{formatPrice(product.price)}</span>
                        {product.regularPrice > product.price && (
                            <span className={styles.regularPrice}>{formatPrice(product.regularPrice)}</span>
                        )}
                    </div>
                </div>

                <p className={styles.shortDescription}>{product.shortDescription}</p>

                {product.variants && product.variants.length > 0 && (
                    <div className={styles.variantsContainer}>
                        <h3 className={styles.variantsTitle}>
                            Variants
                        </h3>
                        <div className={styles.variantsList}>
                            {product.variants.map(variant => (
                                <button
                                    key={variant.id}
                                    className={`${styles.variantButton} ${selectedVariant === variant.id ? styles.selectedVariant : ''} ${!variant.inStock ? styles.outOfStock : ''}`}
                                    onClick={() => setSelectedVariant(variant.id)}
                                    disabled={!variant.inStock}
                                >
                                    {variant.name}
                                    {!variant.inStock && <span className={styles.outOfStockText}>Out of Stock</span>}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                <div className={styles.stockInfo}>
                    {isCurrentVariantInStock() ? (
                        product.stock < 5 ? (
                            <span className={styles.lowStock}>Only {product.stock} left in stock</span>
                        ) : (
                            <span className={styles.inStock}>In Stock</span>
                        )
                    ) : (
                        <span className={styles.outOfStock}>Out of Stock</span>
                    )}
                </div>

                <div className={styles.actionSection}>
                    <div className={styles.quantityContainer}>
                        <QuantitySelector
                            quantity={quantity}
                            onChange={handleQuantityChange}
                            max={product.stock}
                            disabled={!isCurrentVariantInStock()}
                        />
                    </div>

                    <div className={styles.buttonsContainer}>
                        <Button
                            variant="primary"
                            className={styles.addToCartButton}
                            onClick={handleAddToCart}
                            disabled={!isCurrentVariantInStock()}
                        >
                            <ShoppingCart size={18} />
                            Add to Cart
                        </Button>

                        <Button
                            variant="secondary"
                            className={styles.wishlistButton}
                            onClick={handleAddToWishlist}
                        >
                            <Heart size={18} />
                        </Button>

                        <Button
                            variant="secondary"
                            className={styles.shareButton}
                        >
                            <Share2 size={18} />
                        </Button>
                    </div>
                </div>

                <div className={styles.shippingInfo}>
                    <div className={styles.shippingItem}>
                        <Truck size={16} className={styles.shippingIcon} />
                        <span>Free shipping on orders over $100</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetails; 