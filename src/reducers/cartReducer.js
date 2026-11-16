export const CART_ACTIONS = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
  CLEAR_CART: 'CLEAR_CART',
};

export const initialCartState = {
  items: [],
};

export function cartReducer(state, action) {
  switch (action.type) {
    case CART_ACTIONS.ADD_TO_CART:
      return state;

    case CART_ACTIONS.REMOVE_FROM_CART:
      return state;

    case CART_ACTIONS.UPDATE_QUANTITY:
      return state;

    case CART_ACTIONS.CLEAR_CART:
      return state;

    default:
      return state;
  }
}
