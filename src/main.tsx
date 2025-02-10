import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';

import App from './App';
import { CartContextProvider } from './contexts/cart/cart-context.provider';
import { CategoriesContextProvider } from './contexts/categories/categories-context.provider';
import { UserContextProvider } from './contexts/user/user-context.provider';

import './index.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <CategoriesContextProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </CategoriesContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </StrictMode>,
);
