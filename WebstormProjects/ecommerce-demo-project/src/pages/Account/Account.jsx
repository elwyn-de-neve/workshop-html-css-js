import React, { useState } from 'react';
import { Users, ShoppingBag, Heart, MapPin, LogOut } from 'lucide-react';
import styles from './Account.module.css';

// Import account section components
import LoginForm from '../../components/sections/LoginForm';
import RegisterForm from '../../components/sections/RegisterForm';
import ProfileInfo from '../../components/sections/ProfileInfo';
import OrderHistoryList from '../../components/sections/OrderHistoryList';
import WishlistDisplay from '../../components/sections/WishlistDisplay';
import AddressList from '../../components/sections/AddressList';

const Account = () => {
    // State to track if user is authenticated
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // State to track active tab - default to login if not authenticated, profile if authenticated
    const [activeTab, setActiveTab] = useState(isAuthenticated ? 'profile' : 'login');

    // Mock login function
    const handleLogin = (userData) => {
        console.log('Login with:', userData);
        setIsAuthenticated(true);
        setActiveTab('profile');
        // In a real app, this would call an authentication service
    };

    // Mock register function
    const handleRegister = (userData) => {
        console.log('Register with:', userData);
        setIsAuthenticated(true);
        setActiveTab('profile');
        // In a real app, this would call an authentication service
    };

    // Mock logout function
    const handleLogout = () => {
        setIsAuthenticated(false);
        setActiveTab('login');
        // In a real app, this would call an authentication service
    };

    return (
        <div className={styles.accountPage}>
            <div className={styles.container}>
                <h1 className={styles.pageTitle}>My Account</h1>

                {!isAuthenticated ? (
                    // Show login/register tabs when not authenticated
                    <div className={styles.authContainer}>
                        <div className={styles.authTabs}>
                            <button
                                className={`${styles.tabButton} ${activeTab === 'login' ? styles.active : ''}`}
                                onClick={() => setActiveTab('login')}
                            >
                                Login
                            </button>
                            <button
                                className={`${styles.tabButton} ${activeTab === 'register' ? styles.active : ''}`}
                                onClick={() => setActiveTab('register')}
                            >
                                Register
                            </button>
                        </div>

                        <div className={styles.authContent}>
                            {activeTab === 'login' && (
                                <LoginForm onLogin={handleLogin} />
                            )}

                            {activeTab === 'register' && (
                                <RegisterForm onRegister={handleRegister} />
                            )}
                        </div>
                    </div>
                ) : (
                    // Show account dashboard when authenticated
                    <div className={styles.accountDashboard}>
                        <div className={styles.sidebar}>
                            <button
                                className={`${styles.navItem} ${activeTab === 'profile' ? styles.active : ''}`}
                                onClick={() => setActiveTab('profile')}
                            >
                                <Users size={18} />
                                <span>Profile</span>
                            </button>

                            <button
                                className={`${styles.navItem} ${activeTab === 'orders' ? styles.active : ''}`}
                                onClick={() => setActiveTab('orders')}
                            >
                                <ShoppingBag size={18} />
                                <span>Order History</span>
                            </button>

                            <button
                                className={`${styles.navItem} ${activeTab === 'wishlist' ? styles.active : ''}`}
                                onClick={() => setActiveTab('wishlist')}
                            >
                                <Heart size={18} />
                                <span>Wishlist</span>
                            </button>

                            <button
                                className={`${styles.navItem} ${activeTab === 'addresses' ? styles.active : ''}`}
                                onClick={() => setActiveTab('addresses')}
                            >
                                <MapPin size={18} />
                                <span>Addresses</span>
                            </button>

                            <button
                                className={styles.logoutButton}
                                onClick={handleLogout}
                            >
                                <LogOut size={18} />
                                <span>Logout</span>
                            </button>
                        </div>

                        <div className={styles.content}>
                            {activeTab === 'profile' && (
                                <ProfileInfo />
                            )}

                            {activeTab === 'orders' && (
                                <OrderHistoryList />
                            )}

                            {activeTab === 'wishlist' && (
                                <WishlistDisplay />
                            )}

                            {activeTab === 'addresses' && (
                                <AddressList />
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Account; 