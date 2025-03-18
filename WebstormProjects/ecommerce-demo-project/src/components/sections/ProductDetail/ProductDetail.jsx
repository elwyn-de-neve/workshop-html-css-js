import React, { useState } from 'react';
import styles from './ProductDetail.module.css';
import Button from '../../ui/Button/Button';
import Rating from '../../ui/Rating/Rating';
import { Heart, ShoppingCart } from 'lucide-react';

const ProductDetail = ({ product }) => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedVariant, setSelectedVariant] = useState(
        product?.variants?.[0] || null
    );
    const [quantity, setQuantity] = useState(1);

    if (!product) return <div>Loading...</div>;

    const handleImageChange = (index) => {
        setSelectedImage(index);
    };

    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value);
        if (value > 0) {
            setQuantity(value);
        }
    };

    const handleVariantChange = (variant) => {
        setSelectedVariant(variant);
    };

    const handleAddToCart = () => {
        // This would be wired up to actual cart functionality later
        console.log('Adding to cart:', {
            product,
            variant: selectedVariant,
            quantity
        });
    };

    const isInStock = product.stock > 0;
    const discount = product.regularPrice > product.price
        ? ((product.regularPrice - product.price) / product.regularPrice * 100).toFixed(0)
        : null;

    return (
        <section className={styles.productDetail}>
            <div className={styles.productGallery}>
                <div className={styles.mainImage}>
                    <img
                        src={product.images[selectedImage]}
                        alt={product.name}
                        className={styles.featuredImage}
                    />
                    {discount && (
                        <span className={styles.discountBadge}>-{discount}%</span>
                    )}
                </div>
                <div className={styles.thumbnails}>
                    {product.images.map((image, index) => (
                        <button
                            key={index}
                            className={`${styles.thumbnail} ${selectedImage === index ? styles.active : ''}`}
                            onClick={() => handleImageChange(index)}
                        >
                            <img src={image} alt={`${product.name} - Image ${index + 1}`} />
                        </button>
                    ))}
                </div>
            </div>

            <div className={styles.productInfo}>
                <h1 className={styles.productName}>{product.name}</h1>

                <div className={styles.productMeta}>
                    <div className={styles.rating}>
                        <Rating value={product.rating} />
                        <span className={styles.reviewCount}>
                            ({product.reviewCount} reviews)
                        </span>
                    </div>
                    <span className={styles.sku}>SKU: {product.sku}</span>
                </div>

                <div className={styles.pricing}>
                    {discount ? (
                        <>
                            <span className={styles.salePrice}>${product.price.toFixed(2)}</span>
                            <span className={styles.regularPrice}>${product.regularPrice.toFixed(2)}</span>
                        </>
                    ) : (
                        <span className={styles.price}>${product.price.toFixed(2)}</span>
                    )}
                </div>

                <p className={styles.description}>{product.shortDescription}</p>

                {product.variants && product.variants.length > 0 && (
                    <div className={styles.variants}>
                        <h3>Options</h3>
                        <div className={styles.variantOptions}>
                            {product.variants.map((variant) => (
                                <button
                                    key={variant.id}
                                    className={`${styles.variantOption} ${selectedVariant?.id === variant.id ? styles.selectedVariant : ''
                                        }`}
                                    onClick={() => handleVariantChange(variant)}
                                    disabled={!variant.inStock}
                                >
                                    {variant.name}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                <div className={styles.addToCart}>
                    <div className={styles.quantity}>
                        <label htmlFor="quantity">Quantity</label>
                        <input
                            id="quantity"
                            type="number"
                            min="1"
                            value={quantity}
                            onChange={handleQuantityChange}
                            disabled={!isInStock}
                        />
                    </div>

                    <div className={styles.actions}>
                        <Button
                            variant="primary"
                            size="large"
                            onClick={handleAddToCart}
                            disabled={!isInStock}
                            className={styles.addToCartButton}
                        >
                            <ShoppingCart size={20} />
                            {isInStock ? 'Add to Cart' : 'Out of Stock'}
                        </Button>

                        <button className={styles.wishlistButton} aria-label="Add to wishlist">
                            <Heart size={20} />
                        </button>
                    </div>
                </div>

                <div className={styles.stockInfo}>
                    <p className={isInStock ? styles.inStock : styles.outOfStock}>
                        {isInStock ? 'In Stock' : 'Out of Stock'}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProductDetail; 