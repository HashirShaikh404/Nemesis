import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Brand Column */}
        <div className={styles.brandColumn}>
          <h2 className={styles.brandName}>NEMESIS</h2>
          <p className={styles.tagline}>NOT MADE TO FIT IN.</p>
        </div>

        {/* Shop Links */}
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>SHOP</h3>
          <ul className={styles.linkList}>
            <li>
              <Link to="/shop?category=mens-shirts">Mens Shirts</Link>
            </li>
            <li>
              <Link to="/shop?category=womens-dresses">Womens Dresses</Link>
            </li>
            <li>
              <Link to="/shop?category=mens-shoes">Footwear</Link>
            </li>
            <li>
              <Link to="/shop?category=sunglasses">Accessories</Link>
            </li>
          </ul>
        </div>

        {/* Help Links */}
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>HELP</h3>
          <ul className={styles.linkList}>
            <li>
              <Link to="/shop">Store Catalog</Link>
            </li>
            <li>
              <Link to="/cart">Shopping Bag</Link>
            </li>
            <li>
              <Link to="/checkout">Express Checkout</Link>
            </li>
            <li>
              <span style={{ cursor: 'default' }}>24/7 Client Support</span>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>FOLLOW</h3>
          <ul className={styles.linkList}>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                Twitter / X
              </a>
            </li>
            <li>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                TikTok
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} NEMESIS STREETWEAR. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
