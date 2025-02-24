import { UnknownAction } from 'redux';

import { setCartItems, toggleCartHidden } from './cart.action';
import { CartState } from './cart.types';

const INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (state = INITIAL_STATE, action: UnknownAction): CartState => {
  if (setCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    };
  }

  if (toggleCartHidden.match(action)) {
    return {
      ...state,
      isCartOpen: !state.isCartOpen,
    };
  }

  return state;
};
