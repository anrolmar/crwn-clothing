import { CartItem } from '../../types';

export interface CartState {
  readonly cartItems: CartItem[];
  readonly isCartOpen: boolean;
}

export enum CART_ACTION_TYPES {
  TOGGLE_CART_HIDDEN = 'cart/TOGGLE_CART_HIDDEN',
  SET_CART_ITEMS = 'cart/SET_CART_ITEMS',
}
