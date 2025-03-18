import React, { useState } from 'react';
import { MapPin, Check, Plus, Edit2, Trash2 } from 'lucide-react';
import styles from './AddressList.module.css';
import Button from '../../ui/Button/Button';
import Input from '../../ui/Input/Input';

const AddressList = () => {
    // Mock address data - in a real app, this would come from an API
    const [addresses, setAddresses] = useState([
        {
            id: 1,
            name: 'John Doe',
            street: '123 Main Street',
            city: 'New York',
            state: 'NY',
            postalCode: '10001',
            country: 'United States',
            phone: '+1 (123) 456-7890',
            isDefault: true
        },
        {
            id: 2,
            name: 'John Doe',
            street: '456 Park Avenue',
            city: 'San Francisco',
            state: 'CA',
            postalCode: '94107',
            country: 'United States',
            phone: '+1 (987) 654-3210',
            isDefault: false
        }
    ]);

    // Initial form data for new address
    const initialFormData = {
        name: '',
        street: '',
        city: '',
        state: '',
        postalCode: '',
        country: '',
        phone: '',
        isDefault: false
    };

    // State for adding/editing address
    const [isAddingAddress, setIsAddingAddress] = useState(false);
    const [isEditingAddress, setIsEditingAddress] = useState(false);
    const [currentAddressId, setCurrentAddressId] = useState(null);
    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState({});

    // Handle input change for form fields
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });

        // Clear error when user types
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    };

    // Validate address form
    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Full name is required';
        }

        if (!formData.street.trim()) {
            newErrors.street = 'Street address is required';
        }

        if (!formData.city.trim()) {
            newErrors.city = 'City is required';
        }

        if (!formData.state.trim()) {
            newErrors.state = 'State/Province is required';
        }

        if (!formData.postalCode.trim()) {
            newErrors.postalCode = 'Postal/ZIP code is required';
        }

        if (!formData.country.trim()) {
            newErrors.country = 'Country is required';
        }

        if (formData.phone && !/^\+?[0-9\s-()]{8,}$/.test(formData.phone)) {
            newErrors.phone = 'Phone number is invalid';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Set an address as default
    const setDefaultAddress = (addressId) => {
        setAddresses(addresses.map(address => ({
            ...address,
            isDefault: address.id === addressId
        })));
    };

    // Delete an address
    const deleteAddress = (addressId) => {
        const updatedAddresses = addresses.filter(address => address.id !== addressId);

        // If we deleted the default address and there are other addresses,
        // set the first one as default
        if (addresses.find(a => a.id === addressId)?.isDefault && updatedAddresses.length > 0) {
            updatedAddresses[0].isDefault = true;
        }

        setAddresses(updatedAddresses);
    };

    // Start adding a new address
    const startAddAddress = () => {
        setFormData(initialFormData);
        setErrors({});
        setIsAddingAddress(true);
        setIsEditingAddress(false);
        setCurrentAddressId(null);
    };

    // Start editing an existing address
    const startEditAddress = (address) => {
        setFormData({ ...address });
        setErrors({});
        setIsEditingAddress(true);
        setIsAddingAddress(false);
        setCurrentAddressId(address.id);
    };

    // Cancel form
    const cancelForm = () => {
        setIsAddingAddress(false);
        setIsEditingAddress(false);
        setFormData(initialFormData);
        setErrors({});
    };

    // Save a new or edited address
    const saveAddress = (e) => {
        e.preventDefault();

        if (validateForm()) {
            if (isAddingAddress) {
                // Add new address
                const newAddress = {
                    ...formData,
                    id: Date.now() // Generate a simple ID for the new address
                };

                // If this is the first address or marked as default, update other addresses
                if (formData.isDefault || addresses.length === 0) {
                    setAddresses([
                        newAddress,
                        ...addresses.map(a => ({ ...a, isDefault: false }))
                    ]);
                } else {
                    setAddresses([...addresses, newAddress]);
                }
            } else if (isEditingAddress) {
                // Edit existing address
                setAddresses(addresses.map(address => {
                    if (address.id === currentAddressId) {
                        // If this is being set as default, update other addresses
                        if (formData.isDefault && !address.isDefault) {
                            return { ...formData, id: address.id };
                        } else {
                            return { ...formData, id: address.id, isDefault: formData.isDefault || address.isDefault };
                        }
                    } else if (formData.isDefault) {
                        // If edited address is set as default, remove default from others
                        return { ...address, isDefault: false };
                    } else {
                        return address;
                    }
                }));
            }

            // Reset form state
            setIsAddingAddress(false);
            setIsEditingAddress(false);
            setFormData(initialFormData);
            setErrors({});
        }
    };

    return (
        <div className={styles.addressList}>
            <div className={styles.header}>
                <h2 className={styles.title}>My Addresses</h2>

                {!isAddingAddress && !isEditingAddress && (
                    <Button
                        variant="outline"
                        className={styles.addButton}
                        onClick={startAddAddress}
                    >
                        <Plus size={16} />
                        Add New Address
                    </Button>
                )}
            </div>

            {!isAddingAddress && !isEditingAddress ? (
                <>
                    {addresses.length === 0 ? (
                        <div className={styles.emptyState}>
                            <MapPin size={40} className={styles.emptyIcon} />
                            <p className={styles.emptyText}>You have no saved addresses.</p>
                            <Button
                                variant="primary"
                                onClick={startAddAddress}
                            >
                                <Plus size={16} />
                                Add Address
                            </Button>
                        </div>
                    ) : (
                        <div className={styles.addressGrid}>
                            {addresses.map(address => (
                                <div
                                    key={address.id}
                                    className={`${styles.addressCard} ${address.isDefault ? styles.defaultAddress : ''}`}
                                >
                                    {address.isDefault && (
                                        <div className={styles.defaultBadge}>
                                            <Check size={14} />
                                            Default
                                        </div>
                                    )}

                                    <div className={styles.addressDetails}>
                                        <p className={styles.addressName}>{address.name}</p>
                                        <p className={styles.addressLine}>{address.street}</p>
                                        <p className={styles.addressLine}>{address.city}, {address.state} {address.postalCode}</p>
                                        <p className={styles.addressLine}>{address.country}</p>
                                        {address.phone && <p className={styles.addressPhone}>{address.phone}</p>}
                                    </div>

                                    <div className={styles.addressActions}>
                                        <button
                                            className={styles.actionButton}
                                            onClick={() => startEditAddress(address)}
                                            aria-label="Edit address"
                                        >
                                            <Edit2 size={16} />
                                            Edit
                                        </button>

                                        {!address.isDefault && (
                                            <>
                                                <button
                                                    className={styles.actionButton}
                                                    onClick={() => setDefaultAddress(address.id)}
                                                    aria-label="Set as default address"
                                                >
                                                    <Check size={16} />
                                                    Set as Default
                                                </button>

                                                <button
                                                    className={styles.actionButton}
                                                    onClick={() => deleteAddress(address.id)}
                                                    aria-label="Delete address"
                                                >
                                                    <Trash2 size={16} />
                                                    Delete
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </>
            ) : (
                <div className={styles.addressForm}>
                    <h3 className={styles.formTitle}>
                        {isAddingAddress ? 'Add New Address' : 'Edit Address'}
                    </h3>

                    <form onSubmit={saveAddress}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name" className={styles.label}>Full Name</label>
                            <Input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Full name"
                                className={errors.name ? styles.inputError : ''}
                            />
                            {errors.name && <p className={styles.errorText}>{errors.name}</p>}
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="street" className={styles.label}>Street Address</label>
                            <Input
                                type="text"
                                id="street"
                                name="street"
                                value={formData.street}
                                onChange={handleChange}
                                placeholder="Street address"
                                className={errors.street ? styles.inputError : ''}
                            />
                            {errors.street && <p className={styles.errorText}>{errors.street}</p>}
                        </div>

                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label htmlFor="city" className={styles.label}>City</label>
                                <Input
                                    type="text"
                                    id="city"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    placeholder="City"
                                    className={errors.city ? styles.inputError : ''}
                                />
                                {errors.city && <p className={styles.errorText}>{errors.city}</p>}
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="state" className={styles.label}>State/Province</label>
                                <Input
                                    type="text"
                                    id="state"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleChange}
                                    placeholder="State/Province"
                                    className={errors.state ? styles.inputError : ''}
                                />
                                {errors.state && <p className={styles.errorText}>{errors.state}</p>}
                            </div>
                        </div>

                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label htmlFor="postalCode" className={styles.label}>Postal/ZIP Code</label>
                                <Input
                                    type="text"
                                    id="postalCode"
                                    name="postalCode"
                                    value={formData.postalCode}
                                    onChange={handleChange}
                                    placeholder="Postal/ZIP code"
                                    className={errors.postalCode ? styles.inputError : ''}
                                />
                                {errors.postalCode && <p className={styles.errorText}>{errors.postalCode}</p>}
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="country" className={styles.label}>Country</label>
                                <Input
                                    type="text"
                                    id="country"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    placeholder="Country"
                                    className={errors.country ? styles.inputError : ''}
                                />
                                {errors.country && <p className={styles.errorText}>{errors.country}</p>}
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="phone" className={styles.label}>Phone Number (Optional)</label>
                            <Input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Phone number"
                                className={errors.phone ? styles.inputError : ''}
                            />
                            {errors.phone && <p className={styles.errorText}>{errors.phone}</p>}
                        </div>

                        <div className={styles.formGroup}>
                            <div className={styles.checkboxWrapper}>
                                <input
                                    type="checkbox"
                                    id="isDefault"
                                    name="isDefault"
                                    checked={formData.isDefault}
                                    onChange={handleChange}
                                    className={styles.checkbox}
                                />
                                <label htmlFor="isDefault" className={styles.checkboxLabel}>
                                    Set as default shipping address
                                </label>
                            </div>
                        </div>

                        <div className={styles.formActions}>
                            <Button
                                type="button"
                                variant="secondary"
                                onClick={cancelForm}
                                className={styles.cancelButton}
                            >
                                Cancel
                            </Button>

                            <Button
                                type="submit"
                                variant="primary"
                                className={styles.saveButton}
                            >
                                Save Address
                            </Button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default AddressList; 