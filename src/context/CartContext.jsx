import { createContext, useContext, useReducer, useEffect } from 'react';
import { cartReducer, initialCartState, CART_ACTIONS } from '../reducers/cartReducer.js';

// Create the context so any component can access the cart
const CartContext = createContext();

const CART_STORAGE_KEY = 'nemesis_cart_state';

// Helper function to read saved cart from browser localStorage
function loadInitialState() {
  try {
    const saved = localStorage.getItem(CART_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed?.items)) {
        return parsed;
      }
    }
  } catch (e) {
    console.error('Failed to parse cart state from localStorage:', e);
  }
  return initialCartState;
}

export function CartProvider({ children }) {
  // Set up useReducer to manage cart state
  const [state, dispatch] = useReducer(cartReducer, null, loadInitialState);

  // Save to localStorage whenever cart changes
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.error('Failed to save cart state to localStorage:', e);
    }
  }, [state]);

  // Function to add a product to the cart
  const addToCart = (product, quantity = 1, size = 'M') => {
    dispatch({
      type: CART_ACTIONS.ADD_TO_CART,
      payload: { product, quantity, size },
    });
  };

  // Function to remove an item from the cart
  const removeFromCart = (key) => {
    dispatch({
      type: CART_ACTIONS.REMOVE_FROM_CART,
      payload: { key },
    });
  };

  // Function to change the quantity (+ or -)
  const updateQuantity = (key, quantity) => {
    dispatch({
      type: CART_ACTIONS.UPDATE_QUANTITY,
      payload: { key, quantity },
    });
  };

  // Function to reset the entire cart
  const clearCart = () => {
    dispatch({
      type: CART_ACTIONS.CLEAR_CART,
    });
  };

  // Calculate total count and total dollar price
  const cartCount = state.items.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = state.items.reduce(
    (total, item) => total + Number(item.price) * item.quantity,
    0
  );

  const value = {
    cartItems: state.items,
    cartCount,
    cartTotal,
    dispatch,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

// Custom hook so components can easily call useCart()
export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
}
