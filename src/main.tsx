import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';

import App from './App';
import { CartContextProvider } from './contexts/cart/cart-context.provider';
import { ProductsContextProvider } from './contexts/products/products-context.provider';
import { UserContextProvider } from './contexts/user/user-context.provider';

import './index.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <ProductsContextProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </ProductsContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </StrictMode>,
);
