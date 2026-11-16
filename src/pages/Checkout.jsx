import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  ArrowLeft,
  CreditCard,
  Banknote,
  ShieldCheck,
  Building,
  AlertCircle,
} from 'lucide-react';
import toast from 'react-hot-toast';
import { useCart } from '../context/CartContext.jsx';
import styles from './Checkout.module.css';

const PAYMENT_METHODS = [
  { id: 'credit', label: 'Credit Card', icon: CreditCard },
  { id: 'debit', label: 'Debit Card', icon: Building },
  { id: 'cod', label: 'Cash on Delivery', icon: Banknote },
];

function Checkout() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [orderId, setOrderId] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('credit');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: '',
    upiId: '',
  });

  const shippingCost = cartTotal > 100 || cartTotal === 0 ? 0 : 15;
  const grandTotal = cartTotal + shippingCost;

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Formatting card number with spaces every 4 digits
    if (name === 'cardNumber') {
      const cleaned = value.replace(/\D/g, '').slice(0, 16);
      const formatted = cleaned.match(/.{1,4}/g)?.join(' ') || cleaned;
      setFormData((prev) => ({ ...prev, cardNumber: formatted }));
      return;
    }

    // Formatting MM/YY
    if (name === 'expiry') {
      const cleaned = value.replace(/\D/g, '').slice(0, 4);
      let formatted = cleaned;
      if (cleaned.length >= 2) {
        formatted = `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
      }
      setFormData((prev) => ({ ...prev, expiry: formatted }));
      return;
    }

    // Formatting CVV to 3 or 4 digits max
    if (name === 'cvv') {
      const cleaned = value.replace(/\D/g, '').slice(0, 4);
      setFormData((prev) => ({ ...prev, cvv: cleaned }));
      return;
    }

    setErrorMessage('');
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    // 1. Basic shipping validation
    if (
      !formData.firstName.trim() ||
      !formData.lastName.trim() ||
      !formData.email.trim() ||
      !formData.address.trim() ||
      !formData.city.trim() ||
      !formData.postalCode.trim()
    ) {
      setErrorMessage('Please fill in all shipping address fields.');
      return;
    }

    // 2. Strict Card Validation when Credit or Debit is selected
    if (paymentMethod === 'credit' || paymentMethod === 'debit') {
      const digitsOnly = formData.cardNumber.replace(/\s/g, '');
      if (digitsOnly.length < 16) {
        setErrorMessage('Please enter a valid 16-digit card number.');
        return;
      }
      if (!formData.cardName.trim()) {
        setErrorMessage('Please enter the cardholder name.');
        return;
      }
      if (formData.expiry.length < 5) {
        setErrorMessage('Please enter card expiry in MM/YY format.');
        return;
      }
      if (formData.cvv.length < 3) {
        setErrorMessage('Please enter a valid 3-4 digit CVV/CVC.');
        return;
      }
    }

    // Success flow with double-submit guard
    setErrorMessage('');
    setIsSubmitting(true);
    const generatedId = `NMS-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(generatedId);
    setSubmitted(true);
    clearCart();
    toast.success('Order placed successfully!');
  };

  if (submitted) {
    return (
      <div className={styles.checkoutPage}>
        <div className={styles.successCard}>
          <CheckCircle2 size={56} className={styles.successIcon} />
          <h1 className={styles.successTitle}>ORDER CONFIRMED</h1>
          <p style={{ opacity: 0.8, margin: 0 }}>
            Thank you, <strong>{formData.firstName}</strong>. Your order has been placed via{' '}
            <strong style={{ color: 'var(--color-yellow)', textTransform: 'uppercase' }}>
              {paymentMethod}
            </strong>
            .
          </p>
          <div
            style={{
              padding: '12px 20px',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '4px',
              fontFamily: 'var(--font-body)',
              fontSize: '0.85rem',
              letterSpacing: '0.08em',
            }}
          >
            ORDER ID: <strong>{orderId}</strong>
          </div>
          <Link
            to="/shop"
            style={{
              marginTop: '16px',
              color: 'var(--color-yellow)',
              textDecoration: 'none',
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
            }}
          >
            Return to Store →
          </Link>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className={styles.checkoutPage}>
        <div className={styles.checkoutContainer} style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem' }}>
            NO ITEMS TO CHECKOUT
          </h2>
          <Link
            to="/shop"
            style={{ color: 'var(--color-yellow)', textDecoration: 'none' }}
          >
            Go to Shop →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.checkoutPage}>
      <div className={styles.checkoutContainer}>
        <div className={styles.checkoutHeader}>
          <Link
            to="/cart"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              color: 'rgba(255, 255, 255, 0.6)',
              textDecoration: 'none',
              marginBottom: 12,
              fontSize: '0.85rem',
            }}
          >
            <ArrowLeft size={16} /> Return to Bag
          </Link>
          <h1 className={styles.checkoutTitle}>CHECKOUT</h1>
        </div>

        <form onSubmit={handleSubmit} className={styles.checkoutLayout}>
          {/* Form details */}
          <div className={styles.formSection}>
            {/* Step 1: Customer Info */}
            <div className={styles.stepBlock}>
              <h2 className={styles.stepTitle}>
                <span className={styles.stepNum}>1</span> Shipping Information
              </h2>
              <div className={styles.formGrid}>
                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel}>First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className={styles.inputField}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel}>Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className={styles.inputField}
                  />
                </div>

                <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                  <label className={styles.inputLabel}>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.inputField}
                  />
                </div>

                <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                  <label className={styles.inputLabel}>Delivery Address *</label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className={styles.inputField}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel}>City *</label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className={styles.inputField}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel}>Postal Code *</label>
                  <input
                    type="text"
                    name="postalCode"
                    required
                    value={formData.postalCode}
                    onChange={handleChange}
                    className={styles.inputField}
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Payment Options */}
            <div className={styles.stepBlock}>
              <h2 className={styles.stepTitle}>
                <span className={styles.stepNum}>2</span> Payment Method
              </h2>

              {/* Payment Method Selector Tabs */}
              <div className={styles.paymentTabs}>
                {PAYMENT_METHODS.map((method) => {
                  const Icon = method.icon;
                  const isActive = paymentMethod === method.id;
                  return (
                    <button
                      key={method.id}
                      type="button"
                      className={`${styles.paymentTabBtn} ${isActive ? styles.activeTab : ''
                        }`}
                      onClick={() => setPaymentMethod(method.id)}
                    >
                      <Icon size={20} />
                      <span>{method.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Credit / Debit Card Inputs */}
              {(paymentMethod === 'credit' || paymentMethod === 'debit') && (
                <div className={styles.formGrid}>
                  <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                    <label className={styles.inputLabel}>Cardholder Name *</label>
                    <input
                      type="text"
                      name="cardName"
                      placeholder="ALEX MERCER"
                      value={formData.cardName}
                      onChange={handleChange}
                      className={styles.inputField}
                    />
                  </div>

                  <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                    <label className={styles.inputLabel}>16-Digit Card Number *</label>
                    <input
                      type="text"
                      name="cardNumber"
                      placeholder="XXXX XXXX XXXX XXXX"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      className={styles.inputField}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label className={styles.inputLabel}>Expiry (MM/YY) *</label>
                    <input
                      type="text"
                      name="expiry"
                      placeholder="XX/XX"
                      value={formData.expiry}
                      onChange={handleChange}
                      className={styles.inputField}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label className={styles.inputLabel}>CVV / CVC *</label>
                    <input
                      type="password"
                      name="cvv"
                      placeholder="XXX"
                      value={formData.cvv}
                      onChange={handleChange}
                      className={styles.inputField}
                    />
                  </div>
                </div>
              )}

              {/* Cash On Delivery Notice */}
              {paymentMethod === 'cod' && (
                <div className={styles.paymentInfoNotice}>
                  <Banknote size={24} style={{ color: 'var(--color-yellow)', flexShrink: 0 }} />
                  <div>
                    <strong>Cash on Delivery selected.</strong>
                    <br />
                    You will pay <strong>${grandTotal.toFixed(2)}</strong> in cash or card to the courier upon delivery at your doorstep. No prepayment required.
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Order Review */}
          <div className={styles.orderReviewCard}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', margin: 0 }}>
              YOUR ORDER
            </h2>

            {cartItems.map((item) => (
              <div key={item.key} className={styles.reviewItem}>
                <span className={styles.reviewItemTitle}>
                  {item.quantity}x {item.title} ({item.size})
                </span>
                <span style={{ color: 'var(--color-yellow)' }}>
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}

            <div style={{ display: 'flex', justifyContent: 'space-between', opacity: 0.8, fontSize: '0.85rem' }}>
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', opacity: 0.8, fontSize: '0.85rem' }}>
              <span>Shipping</span>
              <span>{shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', opacity: 0.8, fontSize: '0.85rem' }}>
              <span>Payment Mode</span>
              <span style={{ textTransform: 'uppercase', color: 'var(--color-yellow)', fontWeight: 600 }}>
                {paymentMethod}
              </span>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                borderTop: 'var(--border-grid-light)',
                paddingTop: 12,
                marginTop: 8,
              }}
            >
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem' }}>TOTAL</span>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.75rem',
                  color: 'var(--color-yellow)',
                }}
              >
                ${grandTotal.toFixed(2)}
              </span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={styles.placeOrderBtn}
              style={isSubmitting ? { opacity: 0.6, cursor: 'not-allowed' } : {}}
            >
              {isSubmitting ? 'Processing Order...' : `Place Order ($${grandTotal.toFixed(2)})`}
            </button>

            {/* In-place validation notice right below the submit button */}
            {errorMessage && (
              <div className={styles.checkoutErrorAlert}>
                <AlertCircle size={18} style={{ flexShrink: 0, marginTop: 1 }} />
                <span>{errorMessage}</span>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
