import { createSelector } from 'reselect';

import { CartState } from './cart.types';

const selectCartReducer = ({ cart }: { cart: CartState }) => cart;

export const selectCartItems = createSelector([selectCartReducer], (cart) => cart.cartItems);
export const selectIsCartOpen = createSelector([selectCartReducer], (cart) => cart.isCartOpen);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, currentItem) => total + currentItem.quantity, 0),
);
export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, currentItem) => total + currentItem.price * currentItem.quantity, 0),
);
