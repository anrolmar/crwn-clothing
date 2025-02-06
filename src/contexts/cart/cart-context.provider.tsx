import { useEffect, useState } from 'react';

import { CartContext, CartContextType } from './cart.context';
import { CartItem, Product } from '../../types';

type CartContextProviderProps = {
  children: React.ReactNode;
};

const addCartItem = (cartItems: CartItem[], productToAdd: Product) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem,
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [isCartOpen, setIsCartOpen] = useState<CartContextType['isCartOpen']>(false);
  const [cartItems, setCartItems] = useState<CartContextType['cartItems']>([]);
  const [cartCount, setCartCount] = useState<CartContextType['cartCount']>(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, currentItem) => total + currentItem.quantity, 0);
    setCartCount(newCartCount);
  }, [cartItems]);

  const addItemToCart = (productToAdd: Product) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  return (
    <CartContext.Provider value={{ isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};
