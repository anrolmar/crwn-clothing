import { CART_ACTION_TYPES, CartAction, CartState } from './cart.types';

const INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (state = INITIAL_STATE, action: CartAction): CartState => {
  switch (action.type) {
    case CART_ACTION_TYPES.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: action.payload.cartItems,
      };
    default:
      return state;
  }
};
