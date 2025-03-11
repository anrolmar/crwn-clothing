import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CartState } from './cart.types';
import { CartItem } from '../../types';

const INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {
    setCartItems: (state, action: PayloadAction<CartItem[]>) => {
      state.cartItems = action.payload;
    },

    toggleCartHidden: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCartItems, toggleCartHidden } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
