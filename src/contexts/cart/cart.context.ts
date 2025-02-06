import { createContext, Dispatch, SetStateAction } from 'react';

import { CartItem, Product } from '../../types';

export type CartContextType = {
  isCartOpen: boolean;
  setIsCartOpen: Dispatch<SetStateAction<CartContextType['isCartOpen']>>;
  cartItems: CartItem[];
  addItemToCart: (product: Product) => void;
  cartCount: number;
};

export const CartContext = createContext<CartContextType>({} as CartContextType);
