import { Link } from 'react-router-dom';
import { Trash2, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext.jsx';
import styles from './Cart.module.css';

function Cart() {
  // Grab state and helper functions from our CartContext
  const { cartItems, cartCount, cartTotal, updateQuantity, removeFromCart, clearCart } =
    useCart();

  // Free shipping over $100, otherwise $15 flat rate
  const shippingCost = cartTotal > 100 || cartTotal === 0 ? 0 : 15;
  const grandTotal = cartTotal + shippingCost;

  // Show friendly empty state if no products in cart
  if (cartItems.length === 0) {
    return (
      <div className={styles.cartPage}>
        <div className={styles.emptyState}>
          <ShoppingBag size={48} strokeWidth={1} style={{ opacity: 0.4 }} />
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', margin: 0 }}>
            YOUR BAG IS EMPTY
          </h2>
          <p style={{ opacity: 0.6, maxWidth: 360 }}>
            Looks like you haven't dropped anything into your bag yet.
          </p>
          <Link to="/shop" className={styles.shopLink}>
            Explore Drops <ArrowRight size={16} style={{ display: 'inline', marginLeft: 4 }} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.cartPage}>
      <div className={styles.cartContainer}>
        <div className={styles.cartHeader}>
          <h1 className={styles.cartTitle}>SHOPPING BAG</h1>
          <span className={styles.itemCount}>{cartCount} items</span>
        </div>

        <div className={styles.cartLayout}>
          {/* Items list */}
          <div className={styles.itemsList}>
            {cartItems.map((item) => (
              <div key={item.key} className={styles.cartItem}>
                <div className={styles.itemImgFrame}>
                  <img src={item.thumbnail} alt={item.title} className={styles.itemImg} />
                </div>

                <div className={styles.itemInfo}>
                  <Link to={`/product/${item.id}`} className={styles.itemTitle}>
                    {item.title}
                  </Link>
                  <span className={styles.itemMeta}>Size: {item.size}</span>
                  <span className={styles.itemPrice}>${item.price}</span>
                </div>

                <div className={styles.actionsColumn}>
                  <button
                    className={styles.deleteBtn}
                    onClick={() => removeFromCart(item.key)}
                    aria-label="Remove item"
                  >
                    <Trash2 size={16} />
                  </button>

                  <div className={styles.qtyControl}>
                    <button
                      className={styles.qtyBtn}
                      onClick={() => updateQuantity(item.key, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className={styles.qtyVal}>{item.quantity}</span>
                    <button
                      className={styles.qtyBtn}
                      onClick={() => updateQuantity(item.key, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <button className={styles.clearCartBtn} onClick={clearCart}>
              Clear Entire Bag
            </button>
          </div>

          {/* Order Summary */}
          <div className={styles.summaryCard}>
            <h2 className={styles.summaryTitle}>ORDER SUMMARY</h2>

            <div className={styles.summaryRow}>
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>

            <div className={styles.summaryRow}>
              <span>Estimated Shipping</span>
              <span>{shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}</span>
            </div>

            {shippingCost > 0 && (
              <p style={{ fontSize: '0.75rem', opacity: 0.6, margin: 0 }}>
                Add ${(100 - cartTotal).toFixed(2)} more to unlock free express shipping.
              </p>
            )}

            <div className={styles.totalRow}>
              <span className={styles.totalLabel}>TOTAL</span>
              <span className={styles.totalAmount}>${grandTotal.toFixed(2)}</span>
            </div>

            <Link to="/checkout" className={styles.checkoutBtn}>
              Proceed to Checkout <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
