import { CART_ACTION_TYPES } from './cart.types';
import { CartItem, Product } from '../../types';
import { Action, ActionWithPayload, createAction, withMatcher } from '../../utils/reducer/reducer.utils';

type SetCartItems = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, CartItem[]>;
type ToggleCartHidden = Action<CART_ACTION_TYPES.TOGGLE_CART_HIDDEN>;

export const setCartItems = withMatcher(
  (cartItems: CartItem[]): SetCartItems => createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems),
);
export const toggleCartHidden = withMatcher((): ToggleCartHidden => createAction(CART_ACTION_TYPES.TOGGLE_CART_HIDDEN));

export const addItemToCart = (cartItems: CartItem[], productToAdd: Product) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
};

export const clearItemFromCart = (cartItems: CartItem[], cartItem: CartItem) => {
  const newCartItems = clearCartItem(cartItems, cartItem);
  return setCartItems(newCartItems);
};

export const removeItemFromCart = (cartItems: CartItem[], cartItem: CartItem) => {
  const newCartItems = removeCartItem(cartItems, cartItem);
  return setCartItems(newCartItems);
};

//*************************************************
//*************************************************

const addCartItem = (cartItems: CartItem[], productToAdd: Product): CartItem[] => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem,
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const clearCartItem = (cartItems: CartItem[], cartItemToClear: CartItem): CartItem[] => {
  return [...cartItems.filter((item) => item.id !== cartItemToClear.id)];
};

const removeCartItem = (cartItems: CartItem[], cartItemToRemove: CartItem): CartItem[] => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);
  if (existingCartItem?.quantity === 1) {
    return clearCartItem(cartItems, cartItemToRemove);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem,
  );
};
