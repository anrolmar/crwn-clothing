import { combineReducers } from '@reduxjs/toolkit';

import { cartReducer } from './cart/cart.reducer';
import { categoriesReducer } from './categories/category.reducer';
import { userReducer } from './user/user.reducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  categories: categoriesReducer,
  user: userReducer,
});

export default rootReducer;
