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
            <li>New Arrivals</li>
            <li>Tops</li>
            <li>Bottoms</li>
            <li>Accessories</li>
          </ul>
        </div>

        {/* Help Links */}
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>HELP</h3>
          <ul className={styles.linkList}>
            <li>Contact</li>
            <li>FAQ</li>
            <li>Shipping</li>
            <li>Returns</li>
          </ul>
        </div>

        {/* Social Links */}
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>FOLLOW</h3>
          <ul className={styles.linkList}>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>TikTok</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} NEMESIS. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
