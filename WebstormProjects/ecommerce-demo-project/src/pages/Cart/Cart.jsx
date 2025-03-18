import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Cart.module.css';
import CartItems from '../../components/sections/CartItems';
import OrderSummary from '../../components/sections/OrderSummary';
import SuggestedProducts from '../../components/sections/SuggestedProducts';

// This would come from a global state management system in a real app
import mockProducts from '../../data/mockProducts';

const Cart = () => {
    const navigate = useNavigate();
    // In a real app, this would be managed by context/redux
    const [cartItems, setCartItems] = useState([]);

    // Mock initialization of cart (in a real app, this would be fetched from an API or local storage)
    useEffect(() => {
        // Just add a couple of items to the cart for demonstration
        const sampleCart = [
            {
                id: 1,
                name: mockProducts[0].name,
                price: mockProducts[0].price,
                regularPrice: mockProducts[0].regularPrice,
                image: mockProducts[0].images[0],
                quantity: 1,
                stock: mockProducts[0].stock,
                variant: mockProducts[0].variants?.[0]?.name || null
            },
            {
                id: 3,
                name: mockProducts[2].name,
                price: mockProducts[2].price,
                regularPrice: mockProducts[2].regularPrice,
                image: mockProducts[2].images[0],
                quantity: 2,
                stock: mockProducts[2].stock,
                variant: mockProducts[2].variants?.[0]?.name || null
            }
        ];

        setCartItems(sampleCart);
    }, []);

    const handleUpdateQuantity = (itemId, newQuantity) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === itemId
                    ? { ...item, quantity: newQuantity }
                    : item
            )
        );
    };

    const handleRemoveItem = (itemId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
    };

    const handleAddToCart = (product) => {
        // Check if product is already in cart
        const existingItem = cartItems.find(item => item.id === product.id);

        if (existingItem) {
            // Increase quantity if already in cart
            handleUpdateQuantity(product.id, existingItem.quantity + 1);
        } else {
            // Add new item to cart
            const newItem = {
                id: product.id,
                name: product.name,
                price: product.price,
                regularPrice: product.regularPrice,
                image: product.images[0],
                quantity: 1,
                stock: product.stock,
                variant: product.variants?.[0]?.name || null
            };

            setCartItems(prevItems => [...prevItems, newItem]);
        }
    };

    const handleProceedToCheckout = () => {
        navigate('/checkout');
    };

    return (
        <div className={styles.cartPage}>
            <div className="container">
                <div className={styles.cartLayout}>
                    <div className={styles.cartItemsContainer}>
                        <CartItems
                            items={cartItems}
                            onUpdateQuantity={handleUpdateQuantity}
                            onRemoveItem={handleRemoveItem}
                        />

                        {cartItems.length > 0 && (
                            <SuggestedProducts
                                products={mockProducts}
                                cartItems={cartItems}
                                onAddToCart={handleAddToCart}
                            />
                        )}
                    </div>

                    <div className={styles.orderSummaryContainer}>
                        <OrderSummary
                            cartItems={cartItems}
                            showCheckoutButton={true}
                            showPromoCode={true}
                            linkTo="/checkout"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart; 