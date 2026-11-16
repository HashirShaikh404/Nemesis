import { createContext, useContext, useReducer } from 'react';
import { cartReducer, initialCartState } from '../reducers/cartReducer.js';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  const value = {
    cartItems: state.items,
    cartCount: state.items.reduce((total, item) => total + item.quantity, 0),
    cartTotal: state.items.reduce((total, item) => total + item.price * item.quantity, 0),
    dispatch,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
}
