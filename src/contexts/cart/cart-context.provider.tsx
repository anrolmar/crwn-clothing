import { useReducer } from 'react';

import { CartContext, CartContextType } from './cart.context';
import { CART_ACTION_TYPES, cartReducer, CartState } from '../../reducers/cart.reducer';
import { CartItem, Product } from '../../types';

type CartContextProviderProps = {
  children: React.ReactNode;
};

const INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { cartItems, cartCount, cartTotal, isCartOpen } = state;

  const addItemToCart = (product: Product) => {
    const newCartItems = addCartItem(cartItems, product);
    updateCartItems(newCartItems);
  };

  const clearItemFromCart = (cartItem: CartItem) => {
    const newCartItems = clearCartItem(cartItems, cartItem);
    updateCartItems(newCartItems);
  };

  const removeItemFromCart = (cartItem: CartItem) => {
    const newCartItems = removeCartItem(cartItems, cartItem);
    updateCartItems(newCartItems);
  };

  const updateCartItems = (newCartItems: CartItem[]) => {
    const newCartCount = newCartItems.reduce((total, currentItem) => total + currentItem.quantity, 0);
    const newCartTotal = newCartItems.reduce(
      (total, currentItem) => total + currentItem.price * currentItem.quantity,
      0,
    );

    dispatch({
      type: CART_ACTION_TYPES.SET_CART_ITEMS,
      payload: {
        cartItems: newCartItems,
        cartCount: newCartCount,
        cartTotal: newCartTotal,
      },
    });
  };

  const setIsCartOpen = () => {
    dispatch({ type: CART_ACTION_TYPES.TOGGLE_CART_HIDDEN });
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
