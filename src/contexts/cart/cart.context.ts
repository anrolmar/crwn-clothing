import { createContext } from 'react';

import { CartItem, Product } from '../../types';

export type CartContextType = {
  cartItems: CartItem[];
  cartCount: number;
  cartTotal: number;
  isCartOpen: boolean;
  addItemToCart: (product: Product) => void;
  clearItemFromCart: (cartItem: CartItem) => void;
  removeItemFromCart: (cartItem: CartItem) => void;
  setIsCartOpen: () => void;
};

export const CartContext = createContext<CartContextType>({} as CartContextType);
