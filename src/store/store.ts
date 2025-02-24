import { createStore, applyMiddleware, compose, Middleware } from 'redux';
import logger from 'redux-logger';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root.reducer';
import { rootSaga } from './root.saga';

export type RootState = ReturnType<typeof rootReducer>;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

type ExtendedPersistConfig = PersistConfig<RootState> & {
  whitelist: (keyof RootState)[];
};

const persistCartConfig: ExtendedPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};
const persistedReducer = persistReducer(persistCartConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();
const middleWares = [process.env.NODE_ENV !== 'production' && logger, sagaMiddleware].filter(
  (middleware): middleware is Middleware => Boolean(middleware),
);
const composeEnhancer =
  (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const composeEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composeEnhancers);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
