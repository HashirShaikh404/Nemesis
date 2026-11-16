// List of action names for the cart reducer
export const CART_ACTIONS = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
  CLEAR_CART: 'CLEAR_CART',
};

// Initial state: start with an empty list of items
export const initialCartState = {
  items: [],
};

// Reducer function to update cart items based on action type
export function cartReducer(state, action) {
  switch (action.type) {
    // 1. Add item or increase count if already in cart
    case CART_ACTIONS.ADD_TO_CART: {
      const { product, quantity = 1, size = 'M' } = action.payload;
      const itemKey = `${product.id}-${size}`;
      const existingIndex = state.items.findIndex(
        (item) => item.key === itemKey
      );

      // If already in cart, just add to the quantity
      if (existingIndex > -1) {
        const updatedItems = [...state.items];
        updatedItems[existingIndex] = {
          ...updatedItems[existingIndex],
          quantity: updatedItems[existingIndex].quantity + quantity,
        };
        return { ...state, items: updatedItems };
      }

      // If it's a new item, append to the array
      return {
        ...state,
        items: [
          ...state.items,
          {
            key: itemKey,
            id: product.id,
            title: product.title,
            price: product.price,
            thumbnail: product.thumbnail || product.images?.[0] || '',
            category: product.category,
            size,
            quantity,
          },
        ],
      };
    }

    // 2. Remove single item by key
    case CART_ACTIONS.REMOVE_FROM_CART: {
      const { key } = action.payload;
      return {
        ...state,
        items: state.items.filter((item) => item.key !== key),
      };
    }

    // 3. Update quantity (+ or -)
    case CART_ACTIONS.UPDATE_QUANTITY: {
      const { key, quantity } = action.payload;
      if (quantity <= 0) {
        return {
          ...state,
          items: state.items.filter((item) => item.key !== key),
        };
      }
      return {
        ...state,
        items: state.items.map((item) =>
          item.key === key ? { ...item, quantity } : item
        ),
      };
    }

    // 4. Empty the whole cart
    case CART_ACTIONS.CLEAR_CART:
      return { ...state, items: [] };

    default:
      return state;
  }
}
