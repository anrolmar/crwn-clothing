import { CartItem } from '../../types';

export interface CartState {
  readonly cartItems: CartItem[];
  readonly isCartOpen: boolean;
}
