import { composeWithDevTools } from '@redux-devtools/extension';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { thunk } from 'redux-thunk';

import { cartReducer } from './cart/cart.reducer';

const persistCartConfig = {
  key: 'cart',
  storage,
};
const persistedCart = persistReducer(persistCartConfig, cartReducer);

const persistedReducer = combineReducers({
  cart: persistedCart,
});

const middleWares = process.env.NODE_ENV !== 'production' ? [logger] : [];
middleWares.push(thunk);

const composeEnhancers = composeWithDevTools(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composeEnhancers);

export const persistor = persistStore(store);
