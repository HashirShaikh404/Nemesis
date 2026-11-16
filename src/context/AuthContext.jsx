import { createContext, useContext, useState, useEffect } from 'react';

// Create user authentication context
const AuthContext = createContext();

const AUTH_STORAGE_KEY = 'nemesis_auth_user';

// Base DummyJSON auth endpoint
const DUMMYJSON_AUTH_URL = 'https://dummyjson.com/auth/login';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem(AUTH_STORAGE_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // Keep localStorage updated when user logs in or out
  useEffect(() => {
    if (user) {
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(AUTH_STORAGE_KEY);
    }
  }, [user]);

  // Log in user via DummyJSON API
  const login = async (username, password) => {
    const response = await fetch(DUMMYJSON_AUTH_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username.trim(),
        password: password.trim(),
        expiresInMins: 60,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Invalid username or password');
    }

    // Save full user profile returned by DummyJSON API
    const userData = {
      id: data.id,
      username: data.username,
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      avatar: data.image || 'https://dummyjson.com/icon/emilys/128',
      gender: data.gender,
      token: data.accessToken,
      joinedDate: 'Member since 2026',
    };

    setUser(userData);
    return userData;
  };

  // Sign up user
  const signup = async (name, email) => {
    // Simulate user creation
    const username = email.split('@')[0];
    const userData = {
      id: Math.floor(1000 + Math.random() * 9000),
      username,
      name,
      email,
      avatar: `https://dummyjson.com/icon/${username}/128`,
      token: 'demo-simulated-token',
      joinedDate: 'New Recruit (2026)',
    };
    setUser(userData);
    return userData;
  };

  // Log out user
  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    isAuthenticated: !!user,
    login,
    signup,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook to use auth in any component
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
