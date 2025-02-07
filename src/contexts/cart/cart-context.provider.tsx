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

const clearCartItem = (cartItems: CartItem[], cartItemToClear: CartItem) => {
  return [...cartItems.filter((item) => item.id !== cartItemToClear.id)];
};

const removeCartItem = (cartItems: CartItem[], cartItemToRemove: CartItem) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);
  if (existingCartItem?.quantity === 1) {
    return clearCartItem(cartItems, cartItemToRemove);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem,
  );
};

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [isCartOpen, setIsCartOpen] = useState<CartContextType['isCartOpen']>(false);
  const [cartItems, setCartItems] = useState<CartContextType['cartItems']>([]);
  const [cartCount, setCartCount] = useState<CartContextType['cartCount']>(0);
  const [cartTotal, setCartTotal] = useState<CartContextType['cartTotal']>(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, currentItem) => total + currentItem.quantity, 0);
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce((total, currentItem) => total + currentItem.price * currentItem.quantity, 0);
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (product: Product) => {
    setCartItems(addCartItem(cartItems, product));
  };

  const clearItemFromCart = (cartItem: CartItem) => {
    setCartItems(clearCartItem(cartItems, cartItem));
  };

  const removeItemFromCart = (cartItem: CartItem) => {
    setCartItems(removeCartItem(cartItems, cartItem));
  };

  const value: CartContextType = {
    cartCount,
    cartItems,
    cartTotal,
    isCartOpen,
    addItemToCart,
    clearItemFromCart,
    removeItemFromCart,
    setIsCartOpen,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
