import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, ShieldCheck, Truck, Star } from 'lucide-react';
import toast from 'react-hot-toast';
import { getProductById, getProductsByCategory } from '../services/productService.js';
import { useCart } from '../context/CartContext.jsx';
import styles from './ProductDetails.module.css';

const SIZES = ['S', 'M', 'L', 'XL'];

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [activeImage, setActiveImage] = useState('');
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { addToCart } = useCart();

  useEffect(() => {
    let isMounted = true;
    async function loadProduct() {
      try {
        setLoading(true);
        const data = await getProductById(id);
        if (isMounted) {
          setProduct(data);
          setActiveImage(data.thumbnail || data.images?.[0] || '');
        }

        // Fetch related products from same category
        if (data?.category) {
          const categoryItems = await getProductsByCategory(data.category, { limit: 5 });
          if (isMounted) {
            setRelatedProducts((categoryItems || []).filter((item) => String(item.id) !== String(id)).slice(0, 4));
          }
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'Product not found');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }
    loadProduct();
    return () => {
      isMounted = false;
    };
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;
    addToCart(product, quantity, selectedSize);
    toast.success(`Added ${quantity}x "${product.title}" (${selectedSize}) to bag!`);
  };

  if (loading) {
    return (
      <div className={styles.productPage}>
        <div className={styles.centerState}>
          <div style={{ color: 'var(--color-yellow)' }}>Loading details...</div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className={styles.productPage}>
        <div className={styles.centerState}>
          <p style={{ color: 'var(--color-error)' }}>{error || 'Product not found'}</p>
          <Link to="/shop" className={styles.backLink}>
            <ArrowLeft size={16} /> Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const images = product.images && product.images.length > 0
    ? product.images
    : [product.thumbnail];

  return (
    <div className={styles.productPage}>
      <div className={styles.backContainer}>
        <Link to="/shop" className={styles.backLink}>
          <ArrowLeft size={16} /> Back to Catalog
        </Link>
      </div>

      <div className={styles.productLayout}>
        {/* Gallery */}
        <div className={styles.gallerySection}>
          <div className={styles.mainImageFrame}>
            <img
              src={activeImage}
              alt={product.title}
              className={styles.mainImage}
            />
          </div>

          {images.length > 1 && (
            <div className={styles.thumbnailsRow}>
              {images.map((img, index) => (
                <button
                  key={index}
                  className={`${styles.thumbnailBtn} ${
                    activeImage === img ? styles.activeThumbnail : ''
                  }`}
                  onClick={() => setActiveImage(img)}
                >
                  <img src={img} alt="" className={styles.thumbImg} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div className={styles.infoSection}>
          <div className={styles.brandCategory}>
            <span>{product.brand || 'NEMESIS'}</span>
            <span>•</span>
            <span>{product.category?.replace('-', ' ')}</span>
            <span>•</span>
            <span>SKU: {product.sku || product.id}</span>
          </div>

          <h1 className={styles.productName}>{product.title}</h1>

          <div className={styles.priceRatingRow}>
            <div className={styles.priceGroup}>
              <span className={styles.price}>${product.price}</span>
              {product.discountPercentage > 10 && (
                <span className={styles.originalPrice}>
                  ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
                </span>
              )}
            </div>
            <span className={styles.rating}>★ {product.rating} / 5.0 rating</span>
          </div>

          <p className={styles.description}>{product.description}</p>

          {/* Size Selector */}
          <div className={styles.selectorBlock}>
            <span className={styles.selectorLabel}>Select Size: {selectedSize}</span>
            <div className={styles.sizeOptions}>
              {SIZES.map((size) => (
                <button
                  key={size}
                  className={`${styles.sizeBtn} ${
                    selectedSize === size ? styles.activeSize : ''
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className={styles.selectorBlock}>
            <span className={styles.selectorLabel}>Quantity</span>
            <div className={styles.quantityRow}>
              <div className={styles.qtyControl}>
                <button
                  className={styles.qtyBtn}
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span className={styles.qtyValue}>{quantity}</span>
                <button
                  className={styles.qtyBtn}
                  onClick={() => setQuantity((q) => q + 1)}
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Action button */}
          <div className={styles.actionsRow}>
            <button className={styles.addToBagBtn} onClick={handleAddToCart}>
              <ShoppingBag size={20} />
              Add to Bag • ${(product.price * quantity).toFixed(2)}
            </button>
          </div>

          {/* Extra Specs */}
          <div className={styles.specsList}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Truck size={18} />
              <span>Free express shipping on drops over $100</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <ShieldCheck size={18} />
              <span>Authentic streetwear guarantee</span>
            </div>
          </div>

          {/* Customer Reviews Section */}
          {product.reviews && product.reviews.length > 0 && (
            <div className={styles.reviewsContainer}>
              <h3 className={styles.reviewsHeading}>Verified Drop Reviews</h3>
              <div className={styles.reviewsList}>
                {product.reviews.map((rev, index) => (
                  <div key={index} className={styles.reviewCard}>
                    <div className={styles.reviewHeader}>
                      <span className={styles.reviewerName}>{rev.reviewerName}</span>
                      <span className={styles.reviewRating}>
                        <Star size={12} fill="var(--color-yellow)" color="var(--color-yellow)" style={{ display: 'inline', marginRight: 3 }} />
                        {rev.rating} / 5
                      </span>
                    </div>
                    <p className={styles.reviewComment}>"{rev.comment}"</p>
                    <span className={styles.reviewDate}>
                      {new Date(rev.date).toLocaleDateString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* You Might Also Like */}
      {relatedProducts.length > 0 && (
        <section className={styles.relatedSection}>
          <div className={styles.relatedHeader}>
            <h2 className={styles.relatedTitle}>YOU MIGHT ALSO LIKE</h2>
            <Link to="/shop" className={styles.viewAllLink}>
              View All Drops →
            </Link>
          </div>
          <div className={styles.relatedGrid}>
            {relatedProducts.map((item) => (
              <Link
                key={item.id}
                to={`/product/${item.id}`}
                className={styles.relatedCard}
              >
                <div className={styles.relatedImgFrame}>
                  <img
                    src={item.thumbnail || item.images?.[0]}
                    alt={item.title}
                    className={styles.relatedImg}
                  />
                </div>
                <div className={styles.relatedInfo}>
                  <span className={styles.relatedItemTitle}>{item.title}</span>
                  <span className={styles.relatedPrice}>${item.price}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default ProductDetails;
