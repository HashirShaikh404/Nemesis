import { Link } from 'react-router-dom';
import { Search, ShoppingBag } from 'lucide-react';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.inner}>
        <Link to="/" className={styles.brand}>
          NEMESIS
        </Link>

        <div className={styles.navLinks}>
          <Link to="/shop" className={styles.navLink}>Shop</Link>
          <span className={styles.navLink}>Drops</span>
          <span className={styles.navLink}>Lookbook</span>
          <span className={styles.navLink}>About</span>
        </div>

        <div className={styles.navIcons}>
          <button className={styles.iconButton} aria-label="Search">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <Link to="/cart" className={styles.cartButton} aria-label="Shopping bag">
            <ShoppingBag size={20} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
