import React from 'react';
import styles from './CustomerForm.module.css';
import Button from '../../ui/Button/Button';

const CustomerForm = ({
    customerInfo = {},
    onChange,
    onSubmit,
    errors = {},
    isSubmitting = false
}) => {
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (onChange) {
            onChange({
                target: {
                    name,
                    value,
                    type,
                    checked
                }
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit();
        }
    };

    return (
        <section className={styles.customerForm}>
            <h2 className={styles.title}>Contact Information</h2>

            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>
                        Email Address <span className={styles.required}>*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={customerInfo?.email || ''}
                        onChange={handleChange}
                        className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                        placeholder="your@email.com"
                        required
                    />
                    {errors.email && <p className={styles.errorText}>{errors.email}</p>}
                </div>

                <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                        <label htmlFor="firstName" className={styles.label}>
                            First Name <span className={styles.required}>*</span>
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={customerInfo?.firstName || ''}
                            onChange={handleChange}
                            className={`${styles.input} ${errors.firstName ? styles.inputError : ''}`}
                            placeholder="John"
                            required
                        />
                        {errors.firstName && <p className={styles.errorText}>{errors.firstName}</p>}
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="lastName" className={styles.label}>
                            Last Name <span className={styles.required}>*</span>
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={customerInfo?.lastName || ''}
                            onChange={handleChange}
                            className={`${styles.input} ${errors.lastName ? styles.inputError : ''}`}
                            placeholder="Doe"
                            required
                        />
                        {errors.lastName && <p className={styles.errorText}>{errors.lastName}</p>}
                    </div>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="phone" className={styles.label}>
                        Phone Number <span className={styles.required}>*</span>
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={customerInfo?.phone || ''}
                        onChange={handleChange}
                        className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                        placeholder="(123) 456-7890"
                        required
                    />
                    {errors.phone && <p className={styles.errorText}>{errors.phone}</p>}
                </div>

                <h2 className={styles.title}>Shipping Address</h2>

                <div className={styles.formGroup}>
                    <label htmlFor="street" className={styles.label}>
                        Street Address <span className={styles.required}>*</span>
                    </label>
                    <input
                        type="text"
                        id="street"
                        name="street"
                        value={customerInfo?.street || ''}
                        onChange={handleChange}
                        className={`${styles.input} ${errors.street ? styles.inputError : ''}`}
                        placeholder="123 Main St"
                        required
                    />
                    {errors.street && <p className={styles.errorText}>{errors.street}</p>}
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="apt" className={styles.label}>
                        Apartment, Suite, etc. (optional)
                    </label>
                    <input
                        type="text"
                        id="apt"
                        name="apt"
                        value={customerInfo?.apt || ''}
                        onChange={handleChange}
                        className={styles.input}
                        placeholder="Apt 4B"
                    />
                </div>

                <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                        <label htmlFor="city" className={styles.label}>
                            City <span className={styles.required}>*</span>
                        </label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={customerInfo?.city || ''}
                            onChange={handleChange}
                            className={`${styles.input} ${errors.city ? styles.inputError : ''}`}
                            placeholder="New York"
                            required
                        />
                        {errors.city && <p className={styles.errorText}>{errors.city}</p>}
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="zip" className={styles.label}>
                            ZIP Code <span className={styles.required}>*</span>
                        </label>
                        <input
                            type="text"
                            id="zip"
                            name="zip"
                            value={customerInfo?.zip || ''}
                            onChange={handleChange}
                            className={`${styles.input} ${errors.zip ? styles.inputError : ''}`}
                            placeholder="10001"
                            required
                        />
                        {errors.zip && <p className={styles.errorText}>{errors.zip}</p>}
                    </div>
                </div>

                <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                        <label htmlFor="state" className={styles.label}>
                            State/Province <span className={styles.required}>*</span>
                        </label>
                        <select
                            id="state"
                            name="state"
                            value={customerInfo?.state || ''}
                            onChange={handleChange}
                            className={`${styles.select} ${errors.state ? styles.inputError : ''}`}
                            required
                        >
                            <option value="">Select State</option>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="NY">New York</option>
                            <option value="TX">Texas</option>
                            {/* Add more states as needed */}
                        </select>
                        {errors.state && <p className={styles.errorText}>{errors.state}</p>}
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="country" className={styles.label}>
                            Country <span className={styles.required}>*</span>
                        </label>
                        <select
                            id="country"
                            name="country"
                            value={customerInfo?.country || ''}
                            onChange={handleChange}
                            className={`${styles.select} ${errors.country ? styles.inputError : ''}`}
                            required
                        >
                            <option value="">Select Country</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="UK">United Kingdom</option>
                            <option value="AU">Australia</option>
                            {/* Add more countries as needed */}
                        </select>
                        {errors.country && <p className={styles.errorText}>{errors.country}</p>}
                    </div>
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.checkboxLabel}>
                        <input
                            type="checkbox"
                            name="saveInfo"
                            checked={customerInfo?.saveInfo || false}
                            onChange={(e) => handleChange({
                                target: {
                                    name: 'saveInfo',
                                    checked: e.target.checked,
                                    type: 'checkbox'
                                }
                            })}
                            className={styles.checkbox}
                        />
                        Save this information for next time
                    </label>
                </div>

                <div className={styles.formActions}>
                    <Button
                        type="submit"
                        variant="primary"
                        disabled={isSubmitting}
                        className={styles.submitButton}
                    >
                        {isSubmitting ? 'Processing...' : 'Continue to Shipping'}
                    </Button>
                </div>
            </form>
        </section>
    );
};

export default CustomerForm; 