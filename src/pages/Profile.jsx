import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, LogOut, Package, Shield, User } from 'lucide-react';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext.jsx';
import { useCart } from '../context/CartContext.jsx';
import styles from './Profile.module.css';

function Profile() {
  const { user, isAuthenticated, logout } = useAuth();
  const { cartCount } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success('Signed out of NEMESIS.');
    navigate('/');
  };

  if (!isAuthenticated) {
    return (
      <div className={styles.profilePage}>
        <div className={styles.guestPrompt}>
          <User size={54} style={{ opacity: 0.35 }} />
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', margin: 0 }}>
            YOU ARE NOT SIGNED IN
          </h1>
          <p style={{ opacity: 0.7, maxWidth: 420 }}>
            Sign in to track orders, manage your streetwear bag, and get early drop access.
          </p>
          <div className={styles.authButtonGroup}>
            <Link to="/login" className={styles.primaryAuthBtn}>
              Sign In
            </Link>
            <Link to="/signup" className={styles.secondaryAuthBtn}>
              Join Syndicate
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.profilePage}>
      <div className={styles.profileContainer}>
        <div className={styles.profileHeader}>
          <h1 className={styles.profileTitle}>MEMBER PROFILE</h1>
        </div>

        {/* User Card */}
        <div className={styles.cardSection}>
          <div className={styles.userCard}>
            <img
              src={user.avatar}
              alt={user.name}
              className={styles.userAvatar}
            />
            <div className={styles.userInfo}>
              <h2 className={styles.userName}>{user.name}</h2>
              <span className={styles.userEmail}>{user.email}</span>
              <span className={styles.membershipBadge}>TIER 1 VIP MEMBER</span>
            </div>
          </div>

          {/* Quick stats */}
          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <span className={styles.statValue}>{cartCount}</span>
              <span className={styles.statLabel}>Items in Bag</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>3</span>
              <span className={styles.statLabel}>Drops Claimed</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>1,450</span>
              <span className={styles.statLabel}>Nemesis Points</span>
            </div>
          </div>

          {/* Navigation and actions */}
          <div className={styles.quickActions}>
            <Link to="/shop" className={styles.actionBtn}>
              <Package size={16} /> Explore New Drops
            </Link>
            <Link to="/cart" className={styles.actionBtn}>
              <ShoppingBag size={16} /> View Bag ({cartCount})
            </Link>
            <button
              onClick={handleLogout}
              className={`${styles.actionBtn} ${styles.logoutBtn}`}
            >
              <LogOut size={16} /> Sign Out
            </button>
          </div>
        </div>

        {/* Account Details Box */}
        <div className={styles.cardSection}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Shield size={20} style={{ color: 'var(--color-yellow)' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', margin: 0 }}>
              SECURITY & MEMBERSHIP
            </h3>
          </div>
          <p style={{ opacity: 0.8, fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>
            Your account is verified for high-demand limited streetwear drops. Shipping addresses and saved preferences will automatically preload during express checkout.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
