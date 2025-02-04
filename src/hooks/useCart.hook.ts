import { useContext } from 'react';

import { CartContext } from '../contexts/cart/cart.context';

export const useCart = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error('cartContext has to be used within <CartContext.Provider>');
  }

  return cartContext;
};
