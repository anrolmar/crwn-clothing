import { CartItem } from '../../types';

export interface CartState {
  cartItems: CartItem[];
  isCartOpen: boolean;
}

export enum CART_ACTION_TYPES {
  TOGGLE_CART_HIDDEN = 'cart/TOGGLE_CART_HIDDEN',
  SET_CART_ITEMS = 'cart/SET_CART_ITEMS',
}
