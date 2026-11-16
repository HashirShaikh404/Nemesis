import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext.jsx';
import styles from './Auth.module.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleFillDemo = () => {
    setUsername('emilys');
    setPassword('emilyspass');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      toast.error('Please enter both username and password.');
      return;
    }

    try {
      setLoading(true);
      await login(username, password);
      toast.success('Authenticated with DummyJSON!');
      navigate('/profile');
    } catch (err) {
      toast.error(err.message || 'Login failed. Please check credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.authPage}>
      <div className={styles.authContainer}>
        <div className={styles.authHeader}>
          <h1 className={styles.authTitle}>MEMBER LOGIN</h1>
          <p className={styles.authSubtitle}>
            Access your exclusive streetwear drops and bag history.
          </p>
        </div>

        {/* DummyJSON Demo Credentials Helper */}
        <div className={styles.demoCredentialsBox}>
          <div className={styles.demoCredHeader}>
            <span>DummyJSON Demo Account</span>
            <button
              type="button"
              className={styles.fillDemoBtn}
              onClick={handleFillDemo}
            >
              Auto-Fill
            </button>
          </div>
          <div className={styles.demoCredText}>
            User: <strong>emilys</strong> | Pass: <strong>emilyspass</strong>
          </div>
        </div>

        <form onSubmit={handleSubmit} className={styles.authForm}>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Username or Email</label>
            <input
              type="text"
              required
              placeholder="e.g. emilys"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={styles.inputField}
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Password</label>
            <input
              type="password"
              required
              placeholder="e.g. emilyspass"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.inputField}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={styles.authSubmitBtn}
            style={loading ? { opacity: 0.6, cursor: 'not-allowed' } : {}}
          >
            {loading ? 'Authenticating...' : 'Sign In'}
          </button>
        </form>

        <div className={styles.authFooter}>
          Don't have an account?
          <Link to="/signup" className={styles.authLink}>
            Create one
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
