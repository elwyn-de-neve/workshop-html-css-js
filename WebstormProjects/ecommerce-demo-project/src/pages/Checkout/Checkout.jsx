import React, { useState } from 'react';
import { ArrowLeft, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './Checkout.module.css';

// Import section components
import CustomerForm from '../../components/sections/CustomerForm';
import ShippingOptions from '../../components/sections/ShippingOptions';
import PaymentMethods from '../../components/sections/PaymentMethods';
import OrderReview from '../../components/sections/OrderReview';

const Checkout = () => {
    // State for current checkout step
    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 4;

    // Customer information state
    const [customerInfo, setCustomerInfo] = useState({
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
        street: '',
        apt: '',
        city: '',
        state: '',
        zip: '',
        country: 'United States',
        saveInfo: true
    });

    // Shipping method state
    const [selectedShippingOption, setSelectedShippingOption] = useState('standard');
    const shippingOptions = [
        {
            id: 'standard',
            name: 'Standard Shipping',
            description: '3-5 business days',
            price: 5.99
        },
        {
            id: 'express',
            name: 'Express Shipping',
            description: '1-2 business days',
            price: 14.99
        }
    ];

    // Payment method state
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('credit-card');
    const [creditCardData, setCreditCardData] = useState({
        cardNumber: '',
        cardName: '',
        expiryDate: '',
        cvv: ''
    });

    // Cart/order summary data (would usually come from a cart context or store)
    const [cartItems] = useState([
        { id: 1, name: 'Product 1', price: 29.99, quantity: 1 },
        { id: 2, name: 'Product 2', price: 49.99, quantity: 2 }
    ]);

    // Calculate order totals
    const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = selectedShippingOption === 'standard' ? 5.99 : 14.99;
    const taxRate = 0.07; // 7% tax rate
    const tax = subtotal * taxRate;
    const total = subtotal + shipping + tax;

    // Form validation errors
    const [errors, setErrors] = useState({});

    // Loading states
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Handle customer form input changes
    const handleCustomerInfoChange = (e) => {
        const { name, value, type, checked } = e.target;
        setCustomerInfo(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));

        // Clear error for the field being edited
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: null }));
        }
    };

    // Handle credit card data changes
    const handleCreditCardChange = (newData) => {
        setCreditCardData(newData);

        // Clear related errors
        const cardFieldErrors = Object.keys(newData).reduce((acc, key) => {
            if (errors[key]) {
                acc[key] = null;
            }
            return acc;
        }, {});

        if (Object.keys(cardFieldErrors).length > 0) {
            setErrors(prev => ({ ...prev, ...cardFieldErrors }));
        }
    };

    // Validate current step form
    const validateCurrentStep = () => {
        const newErrors = {};

        if (currentStep === 1) {
            // Validate customer info
            if (!customerInfo.email) newErrors.email = 'Email is required';
            if (!customerInfo.firstName) newErrors.firstName = 'First name is required';
            if (!customerInfo.lastName) newErrors.lastName = 'Last name is required';
            if (!customerInfo.street) newErrors.street = 'Street address is required';
            if (!customerInfo.city) newErrors.city = 'City is required';
            if (!customerInfo.state) newErrors.state = 'State is required';
            if (!customerInfo.zip) newErrors.zip = 'ZIP code is required';
        }
        else if (currentStep === 3 && selectedPaymentMethod === 'credit-card') {
            // Validate credit card info
            if (!creditCardData.cardNumber) newErrors.cardNumber = 'Card number is required';
            if (!creditCardData.cardName) newErrors.cardName = 'Cardholder name is required';
            if (!creditCardData.expiryDate) newErrors.expiryDate = 'Expiration date is required';
            if (!creditCardData.cvv) newErrors.cvv = 'CVV is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle next step
    const handleNextStep = () => {
        if (validateCurrentStep()) {
            setCurrentStep(prev => Math.min(prev + 1, totalSteps));
            window.scrollTo(0, 0);
        }
    };

    // Handle previous step
    const handlePrevStep = () => {
        setCurrentStep(prev => Math.max(prev - 1, 1));
        window.scrollTo(0, 0);
    };

    // Handle edit section from review page
    const handleEditSection = (section) => {
        switch (section) {
            case 'customer':
                setCurrentStep(1);
                break;
            case 'shipping':
                setCurrentStep(2);
                break;
            case 'payment':
                setCurrentStep(3);
                break;
            case 'cart':
                // Navigate to cart page
                // history.push('/cart'); // Using react-router's history
                break;
            default:
                break;
        }
        window.scrollTo(0, 0);
    };

    // Handle order submission
    const handleSubmitOrder = async () => {
        if (validateCurrentStep()) {
            setIsSubmitting(true);

            try {
                // Simulate API call with timeout
                await new Promise(resolve => setTimeout(resolve, 1500));

                // Order submitted successfully
                // Would usually redirect to a confirmation page or show a success message
                console.log('Order submitted successfully', {
                    customerInfo,
                    shippingOption: shippingOptions.find(opt => opt.id === selectedShippingOption),
                    paymentMethod: {
                        type: selectedPaymentMethod,
                        ...(selectedPaymentMethod === 'credit-card' ? creditCardData : {})
                    },
                    items: cartItems,
                    totals: {
                        subtotal,
                        shipping,
                        tax,
                        total
                    }
                });

                // Navigate to confirmation page
                // history.push('/order-confirmation');
            } catch (error) {
                console.error('Error submitting order:', error);
                setErrors(prev => ({ ...prev, submit: 'Failed to submit order. Please try again.' }));
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    // Render step content based on current step
    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return (
                    <CustomerForm
                        customerInfo={customerInfo}
                        onChange={handleCustomerInfoChange}
                        onSubmit={handleNextStep}
                        errors={errors}
                        isSubmitting={isSubmitting}
                    />
                );
            case 2:
                return (
                    <ShippingOptions
                        shippingOptions={shippingOptions}
                        selectedOption={selectedShippingOption}
                        onSelectOption={setSelectedShippingOption}
                        subtotal={subtotal}
                    />
                );
            case 3:
                return (
                    <PaymentMethods
                        selectedPaymentMethod={selectedPaymentMethod}
                        onPaymentMethodChange={setSelectedPaymentMethod}
                        creditCardData={creditCardData}
                        onCreditCardChange={handleCreditCardChange}
                        errors={errors}
                    />
                );
            case 4:
                return (
                    <OrderReview
                        customerInfo={customerInfo}
                        shippingMethod={shippingOptions.find(opt => opt.id === selectedShippingOption)}
                        paymentMethod={{
                            type: selectedPaymentMethod,
                            ...(selectedPaymentMethod === 'credit-card' ? creditCardData : {})
                        }}
                        cartItems={cartItems}
                        subtotal={subtotal}
                        shipping={shipping}
                        tax={tax}
                        total={total}
                        onEditSection={handleEditSection}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <div className={styles.checkoutPage}>
            <div className={styles.container}>
                <div className={styles.backToCart}>
                    <Link to="/cart" className={styles.backLink}>
                        <ArrowLeft size={16} />
                        <span>Back to Cart</span>
                    </Link>
                </div>

                <h1 className={styles.pageTitle}>Checkout</h1>

                {/* Checkout Progress */}
                <div className={styles.checkoutProgress}>
                    {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
                        <div
                            key={step}
                            className={`${styles.progressStep} ${currentStep === step
                                ? styles.activeStep
                                : currentStep > step
                                    ? styles.completedStep
                                    : ''
                                }`}
                        >
                            <div className={styles.stepCircle}>
                                {currentStep > step ? (
                                    <Check size={16} />
                                ) : (
                                    step
                                )}
                            </div>
                            <div className={styles.stepLabel}>
                                {step === 1 && 'Customer Info'}
                                {step === 2 && 'Shipping'}
                                {step === 3 && 'Payment'}
                                {step === 4 && 'Review'}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Step Content */}
                <div className={styles.stepContent}>
                    {renderStepContent()}
                </div>

                {/* Navigation Buttons */}
                <div className={styles.navigationButtons}>
                    {currentStep > 1 && (
                        <button
                            type="button"
                            className={styles.backButton}
                            onClick={handlePrevStep}
                        >
                            Previous
                        </button>
                    )}

                    {currentStep < totalSteps ? (
                        <button
                            type="button"
                            className={styles.nextButton}
                            onClick={handleNextStep}
                        >
                            Continue
                        </button>
                    ) : (
                        <button
                            type="button"
                            className={`${styles.placeOrderButton} ${isSubmitting ? styles.submitting : ''}`}
                            onClick={handleSubmitOrder}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Processing...' : 'Place Order'}
                        </button>
                    )}
                </div>

                {errors.submit && (
                    <div className={styles.submitError}>{errors.submit}</div>
                )}
            </div>
        </div>
    );
};

export default Checkout; 