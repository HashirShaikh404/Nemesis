import { useState, useRef, useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingBag, X, ArrowRight, Menu } from 'lucide-react';
import { useCart } from '../../context/CartContext.jsx';
import { getAllProducts } from '../../services/productService.js';
import { fuzzySearch } from '../../utils/searchUtils.js';
import styles from './Navbar.module.css';

function Navbar() {
  const { cartCount } = useCart();
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [allProducts, setAllProducts] = useState([]);
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Load products once for instant as-you-type fuzzy suggestions
  useEffect(() => {
    let isMounted = true;
    getAllProducts({ limit: 100 })
      .then((data) => {
        if (isMounted && data) setAllProducts(data);
      })
      .catch((err) => console.error('Failed to load search catalog:', err));
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (searchOpen) {
      inputRef.current?.focus();
    }
  }, [searchOpen]);

  // Real-time suggestions ranked by fuzzy score
  const suggestions = useMemo(() => {
    if (!query.trim()) return [];
    return fuzzySearch(allProducts, query.trim()).slice(0, 5);
  }, [query, allProducts]);

  const handleSearchSubmit = (e) => {
    e?.preventDefault();
    if (query.trim()) {
      navigate(`/shop?q=${encodeURIComponent(query.trim())}`);
      setSearchOpen(false);
      setQuery('');
    }
  };

  const handleSelectSuggestion = (product) => {
    navigate(`/product/${product.id}`);
    setSearchOpen(false);
    setQuery('');
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.inner}>
        <Link to="/" className={styles.brand}>
          NEMESIS
        </Link>

        <div className={styles.navLinks}>
          <Link to="/shop" className={styles.navLink}>Shop</Link>
          <Link to="/shop?category=mens-shirts" className={styles.navLink}>Drops</Link>
          <Link to="/shop?category=womens-dresses" className={styles.navLink}>Lookbook</Link>
          <a href="#about-nemesis" className={styles.navLink}>About</a>
        </div>

        <div className={styles.navIcons}>
          <button
            className={styles.iconButton}
            aria-label="Toggle search"
            onClick={() => {
              setSearchOpen((prev) => !prev);
              setMobileMenuOpen(false);
            }}
          >
            {searchOpen ? <X size={20} strokeWidth={1.5} /> : <Search size={20} strokeWidth={1.5} />}
          </button>
          <Link to="/cart" className={styles.cartButton} aria-label="Shopping bag">
            <ShoppingBag size={20} strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className={styles.cartBadge}>{cartCount}</span>
            )}
          </Link>
          <button
            className={styles.mobileMenuToggle}
            aria-label="Toggle navigation menu"
            onClick={() => {
              setMobileMenuOpen((prev) => !prev);
              setSearchOpen(false);
            }}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={styles.mobileDrawer}>
          <Link
            to="/shop"
            className={styles.mobileNavLink}
            onClick={() => setMobileMenuOpen(false)}
          >
            All Products
          </Link>
          <Link
            to="/shop?category=mens-shirts"
            className={styles.mobileNavLink}
            onClick={() => setMobileMenuOpen(false)}
          >
            Drops
          </Link>
          <Link
            to="/shop?category=womens-dresses"
            className={styles.mobileNavLink}
            onClick={() => setMobileMenuOpen(false)}
          >
            Lookbook
          </Link>
          <Link
            to="/cart"
            className={styles.mobileNavLink}
            onClick={() => setMobileMenuOpen(false)}
          >
            Bag ({cartCount})
          </Link>
        </div>
      )}

      {/* Expandable Search Input & Live Suggestions */}
      {searchOpen && (
        <div ref={dropdownRef} className={styles.searchDropdown}>
          <form onSubmit={handleSearchSubmit} className={styles.searchForm}>
            <Search size={18} className={styles.searchIconLeft} />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search drops, jackets, accessories... (press Enter)"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className={styles.searchFormInput}
            />
            <button
              type="button"
              className={styles.closeSearchBtn}
              onClick={() => {
                setSearchOpen(false);
                setQuery('');
              }}
              aria-label="Close search"
            >
              <X size={18} />
            </button>
          </form>

          {/* Live Suggestions Dropdown */}
          {query.trim().length > 0 && (
            <div className={styles.suggestionsContainer}>
              {suggestions.length > 0 ? (
                <>
                  <div className={styles.suggestionsHeader}>
                    Suggested Products
                  </div>
                  <div className={styles.suggestionsList}>
                    {suggestions.map((item) => (
                      <div
                        key={item.id}
                        className={styles.suggestionItem}
                        onClick={() => handleSelectSuggestion(item)}
                      >
                        <img
                          src={item.thumbnail || item.images?.[0]}
                          alt={item.title}
                          className={styles.suggestionImg}
                        />
                        <div className={styles.suggestionInfo}>
                          <span className={styles.suggestionTitle}>
                            {item.title}
                          </span>
                          <span className={styles.suggestionMeta}>
                            {item.category?.replace('-', ' ')} • ${item.price}
                          </span>
                        </div>
                        <ArrowRight size={14} className={styles.suggestionArrow} />
                      </div>
                    ))}
                  </div>
                  <div
                    className={styles.viewAllResults}
                    onClick={handleSearchSubmit}
                  >
                    View all results for "{query}" →
                  </div>
                </>
              ) : (
                <div className={styles.noSuggestions}>
                  No matches found for "{query}"
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
