import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import Button from '../Button/Button';
import styles from './Modal.module.css';

const Modal = ({
    isOpen,
    onClose,
    title,
    children,
    size = 'medium',
    showCloseButton = true,
    className = '',
    ...props
}) => {
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const handleBackdropClick = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    const modalClasses = [
        styles.modal,
        styles[`modal--${size}`],
        className
    ].filter(Boolean).join(' ');

    return (
        <div
            className={styles.backdrop}
            onClick={handleBackdropClick}
            role="dialog"
            aria-modal="true"
            {...props}
        >
            <div className={modalClasses}>
                <div className={styles['modal-header']}>
                    {title && <h2 className={styles['modal-title']}>{title}</h2>}
                    {showCloseButton && (
                        <Button
                            variant="outline"
                            className={styles['close-button']}
                            onClick={onClose}
                            aria-label="Close modal"
                        >
                            <X size={20} />
                        </Button>
                    )}
                </div>
                <div className={styles['modal-content']}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal; 