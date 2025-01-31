import { useState } from 'react';

import { ProductsContext, ProductsContextType } from './products.context';
import PRODUCTS from '../../shop.data.json';

type ProductsContextProviderProps = {
  children: React.ReactNode;
};

export const ProductsContextProvider = ({ children }: ProductsContextProviderProps) => {
  const [products, _setProducts] = useState<ProductsContextType['products']>(PRODUCTS);

  return <ProductsContext.Provider value={{ products }}>{children}</ProductsContext.Provider>;
};
