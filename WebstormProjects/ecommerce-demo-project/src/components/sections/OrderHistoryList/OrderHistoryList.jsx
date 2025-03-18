import React, { useState } from 'react';
import { Calendar, Package, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import styles from './OrderHistoryList.module.css';
import Button from '../../ui/Button/Button';

const OrderHistoryList = () => {
    // Mock order data - in a real app, this would come from API
    const [orders, setOrders] = useState([
        {
            id: 'ORD-2023-1001',
            date: '2023-06-15',
            status: 'Delivered',
            total: 129.99,
            items: [
                { id: 1, name: 'Wireless Headphones', price: 79.99, quantity: 1, image: '/images/products/headphones.jpg' },
                { id: 2, name: 'Phone Case', price: 25.00, quantity: 2, image: '/images/products/phone-case.jpg' }
            ]
        },
        {
            id: 'ORD-2023-0845',
            date: '2023-05-28',
            status: 'Delivered',
            total: 89.95,
            items: [
                { id: 3, name: 'Running Shoes', price: 89.95, quantity: 1, image: '/images/products/running-shoes.jpg' }
            ]
        },
        {
            id: 'ORD-2023-0721',
            date: '2023-04-10',
            status: 'Delivered',
            total: 45.50,
            items: [
                { id: 4, name: 'T-Shirt', price: 22.75, quantity: 2, image: '/images/products/tshirt.jpg' }
            ]
        }
    ]);

    // State to track which orders are expanded
    const [expandedOrders, setExpandedOrders] = useState({});

    const toggleOrderExpand = (orderId) => {
        setExpandedOrders(prev => ({
            ...prev,
            [orderId]: !prev[orderId]
        }));
    };

    // Format date to readable string
    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className={styles.orderHistoryList}>
            <div className={styles.header}>
                <h2 className={styles.title}>Order History</h2>
            </div>

            {orders.length === 0 ? (
                <div className={styles.emptyState}>
                    <Package size={40} className={styles.emptyIcon} />
                    <p className={styles.emptyText}>You haven't placed any orders yet.</p>
                    <Button
                        variant="primary"
                        className={styles.shopButton}
                        onClick={() => window.location.href = '/products'}
                    >
                        Browse Products
                    </Button>
                </div>
            ) : (
                <div className={styles.ordersList}>
                    {orders.map(order => (
                        <div key={order.id} className={styles.orderCard}>
                            <div className={styles.orderHeader}>
                                <div className={styles.orderInfo}>
                                    <div className={styles.orderDetail}>
                                        <span className={styles.label}>Order</span>
                                        <span className={styles.value}>{order.id}</span>
                                    </div>

                                    <div className={styles.orderDetail}>
                                        <Calendar size={14} className={styles.infoIcon} />
                                        <span className={styles.label}>Date</span>
                                        <span className={styles.value}>{formatDate(order.date)}</span>
                                    </div>

                                    <div className={styles.orderDetail}>
                                        <span className={styles.label}>Status</span>
                                        <span className={`${styles.status} ${styles[order.status.toLowerCase()]}`}>
                                            {order.status}
                                        </span>
                                    </div>

                                    <div className={styles.orderDetail}>
                                        <span className={styles.label}>Total</span>
                                        <span className={styles.value}>${order.total.toFixed(2)}</span>
                                    </div>
                                </div>

                                <div className={styles.actions}>
                                    <button
                                        className={styles.expandButton}
                                        onClick={() => toggleOrderExpand(order.id)}
                                        aria-expanded={expandedOrders[order.id]}
                                        aria-label={expandedOrders[order.id] ? "Collapse order details" : "Expand order details"}
                                    >
                                        {expandedOrders[order.id] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                    </button>
                                </div>
                            </div>

                            {expandedOrders[order.id] && (
                                <div className={styles.orderDetails}>
                                    <h4 className={styles.detailsTitle}>Order Items</h4>

                                    <ul className={styles.itemsList}>
                                        {order.items.map(item => (
                                            <li key={item.id} className={styles.orderItem}>
                                                <div className={styles.itemImageContainer}>
                                                    {/* Fallback image if the product image is not available */}
                                                    <div className={styles.itemImage}>
                                                        <Package size={30} />
                                                    </div>
                                                </div>

                                                <div className={styles.itemInfo}>
                                                    <span className={styles.itemName}>{item.name}</span>
                                                    <span className={styles.itemMeta}>
                                                        Qty: {item.quantity} × ${item.price.toFixed(2)}
                                                    </span>
                                                </div>

                                                <div className={styles.itemPrice}>
                                                    ${(item.price * item.quantity).toFixed(2)}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className={styles.orderActions}>
                                        <Button variant="outline" size="small" className={styles.actionButton}>
                                            Track Order <ExternalLink size={14} />
                                        </Button>
                                        <Button variant="outline" size="small" className={styles.actionButton}>
                                            View Invoice <ExternalLink size={14} />
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default OrderHistoryList; 