import { useState, useEffect, useMemo } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { Search, Plus } from 'lucide-react';
import toast from 'react-hot-toast';
import { getAllProducts, getCategories } from '../services/productService.js';
import { useCart } from '../context/CartContext.jsx';
import { fuzzySearch } from '../utils/searchUtils.js';
import styles from './Shop.module.css';

function Shop() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const urlQuery = searchParams.get('q') || '';
  const urlCategory = searchParams.get('category') || 'all';

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(urlCategory);
  const [searchQuery, setSearchQuery] = useState(urlQuery);
  const [sortBy, setSortBy] = useState('default');
  const [selectedSizes, setSelectedSizes] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { addToCart } = useCart();

  // Sync state if URL query param or category changes
  useEffect(() => {
    if (urlQuery !== undefined) {
      setSearchQuery(urlQuery);
    }
  }, [urlQuery]);

  useEffect(() => {
    if (urlCategory) {
      setSelectedCategory(urlCategory);
    }
  }, [urlCategory]);

  // Fetch products and categories when the shop page mounts
  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      try {
        setLoading(true);
        const [productsData, categoriesData] = await Promise.all([
          getAllProducts({ limit: 100 }),
          getCategories(),
        ]);
        if (isMounted) {
          setProducts(productsData || []);
          setCategories(categoriesData || []);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'Failed to load products');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }
    loadData();
    return () => {
      isMounted = false;
    };
  }, []);

  // Filter and sort the products list in memory
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // 1. Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(
        (p) => p.category?.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // 2. Filter by search input
    if (searchQuery.trim()) {
      result = fuzzySearch(result, searchQuery);
    }

    // 3. Sort by price or rating
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [products, selectedCategory, searchQuery, sortBy]);

  // Handle clicking the "Add" button directly on a product card
  const handleQuickAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    const chosenSize = selectedSizes[product.id] || 'M';
    addToCart(product, 1, chosenSize);
    toast.success(`Added ${product.title} (${chosenSize}) to bag!`);
  };

  const handleSizeChange = (e, productId) => {
    e.preventDefault();
    e.stopPropagation();
    const newSize = e.target.value;
    setSelectedSizes((prev) => ({
      ...prev,
      [productId]: newSize,
    }));
  };

  return (
    <div className={styles.shopPage}>
      {/* ── Banner ── */}
      <section className={styles.banner}>
        <span className={styles.subtitle}>Spring / Summer Drop</span>
        <h1 className={styles.title}>ALL PRODUCTS</h1>
      </section>

      {/* ── Filters & Search ── */}
      <div className={styles.controlsBar}>
        <div className={styles.searchBox}>
          <Search size={18} className={styles.searchIcon} />
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search clothes, accessories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className={styles.filterGroup}>
          <select
            className={styles.categorySelect}
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            {categories.map((cat) => {
              const catName = typeof cat === 'string' ? cat : cat.slug || cat.name;
              return (
                <option key={catName} value={catName}>
                  {catName.replace('-', ' ')}
                </option>
              );
            })}
          </select>

          <select
            className={styles.sortSelect}
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="default">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>

          <span className={styles.productCount}>
            {filteredProducts.length} items
          </span>
        </div>
      </div>

      {/* ── Content Grid ── */}
      {loading ? (
        <div className={styles.centerState}>
          <div className={styles.spinner}></div>
          <p>Loading collection...</p>
        </div>
      ) : error ? (
        <div className={styles.centerState}>
          <p style={{ color: 'var(--color-error)' }}>{error}</p>
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className={styles.centerState}>
          <p>No products found matching your search.</p>
        </div>
      ) : (
        <div className={styles.grid}>
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={styles.card}
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <div className={styles.imageContainer}>
                {product.discountPercentage > 10 && (
                  <span className={styles.badge}>
                    -{Math.round(product.discountPercentage)}%
                  </span>
                )}
                <img
                  src={product.thumbnail || product.images?.[0]}
                  alt={product.title}
                  className={styles.productImage}
                  loading="lazy"
                />
              </div>

              <div className={styles.details}>
                <div className={styles.metaRow}>
                  <span className={styles.categoryTag}>
                    {product.category?.replace('-', ' ')}
                  </span>
                  <span className={styles.rating}>★ {product.rating}</span>
                </div>

                <h3 className={styles.productTitle}>{product.title}</h3>

                <div className={styles.priceRow}>
                  <div className={styles.priceGroup}>
                    <span className={styles.price}>${product.price}</span>
                    {product.discountPercentage > 10 && (
                      <span className={styles.originalPrice}>
                        ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
                      </span>
                    )}
                  </div>
                  <div
                    className={styles.quickAddGroup}
                    onClick={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()}
                  >
                    <select
                      className={styles.sizeSelect}
                      value={selectedSizes[product.id] || 'M'}
                      onChange={(e) => handleSizeChange(e, product.id)}
                      aria-label="Select size"
                    >
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                    </select>

                    <button
                      type="button"
                      className={styles.quickAddBtn}
                      onClick={(e) => handleQuickAdd(e, product)}
                      aria-label="Add to bag"
                    >
                      <Plus size={14} style={{ display: 'inline', marginRight: 3 }} />
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Shop;
