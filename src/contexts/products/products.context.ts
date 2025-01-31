import { createContext } from 'react';

import { Product } from '../../types';

export type ProductsContextType = {
  products: Product[];
};

export const ProductsContext = createContext({} as ProductsContextType);
