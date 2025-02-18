import { CART_ACTION_TYPES, CartItemPayload } from './cart.types';
import { CartItem, Product } from '../../types';
import { createAction } from '../../utils/reducer/reducer.utils';

export const setCartItems = (cartItems: CartItemPayload) => createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems);
export const toggleCartHidden = () => createAction(CART_ACTION_TYPES.TOGGLE_CART_HIDDEN);

export const addItemToCart = (cartItems: CartItem[], product: Product) => {
  const newCartItems = addCartItem(cartItems, product);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, { cartItems: newCartItems });
};

export const clearItemFromCart = (cartItems: CartItem[], cartItem: CartItem) => {
  const newCartItems = clearCartItem(cartItems, cartItem);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, { cartItems: newCartItems });
};

export const removeItemFromCart = (cartItems: CartItem[], cartItem: CartItem) => {
  const newCartItems = removeCartItem(cartItems, cartItem);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, { cartItems: newCartItems });
};

//*************************************************
//*************************************************

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
