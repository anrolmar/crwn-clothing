import { createContext, Dispatch, SetStateAction } from 'react';

export type CartContextType = {
  isCartOpen: boolean;
  setIsCartOpen: Dispatch<SetStateAction<CartContextType['isCartOpen']>>;
};

export const CartContext = createContext<CartContextType>({ isCartOpen: false } as CartContextType);
