import { CartItem } from '../types';

export type CartActionType = (typeof CART_ACTION_TYPES)[keyof typeof CART_ACTION_TYPES];
export enum CART_ACTION_TYPES {
  TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN',
  SET_CART_ITEMS = 'SET_CART_ITEMS',
}

type CartToggleAction = {
  type: CART_ACTION_TYPES.TOGGLE_CART_HIDDEN;
};

export type CartItemPayload = {
  cartItems: CartItem[];
  cartCount: number;
  cartTotal: number;
};

type CartItemAction = {
  type: CART_ACTION_TYPES.SET_CART_ITEMS;
  payload: CartItemPayload;
};

type CartAction = CartToggleAction | CartItemAction;

export interface CartState {
  cartItems: CartItem[];
  cartCount: number;
  cartTotal: number;
  isCartOpen: boolean;
}

export const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case CART_ACTION_TYPES.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      throw new Error(`Unknown action type`);
  }
};
