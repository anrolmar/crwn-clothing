import { combineReducers } from 'redux';

import { cartReducer } from './cart/cart.reducer';
import { categoriesReducer } from './categories/category.reducer';
import { userReducer } from './user/user.reducer';
import { CartAction } from './cart/cart.types';
import { UserAction } from './user/user.types';
import { CategoriesAction } from './categories/category.types';

const rootReducer = combineReducers({
  cart: cartReducer,
  categories: categoriesReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type RootAction = CartAction | UserAction | CategoriesAction;

export default rootReducer;
