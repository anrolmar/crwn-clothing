import { useState } from 'react';

import { CartContext, CartContextType } from './cart.context';

type CartContextProviderProps = {
  children: React.ReactNode;
};

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [isCartOpen, setIsCartOpen] = useState<CartContextType['isCartOpen']>(false);

  return <CartContext.Provider value={{ isCartOpen, setIsCartOpen }}>{children}</CartContext.Provider>;
};
