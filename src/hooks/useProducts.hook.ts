import { useContext } from 'react';

import { ProductsContext } from '../contexts/products/products.context';

export const useProducts = () => {
  const productContext = useContext(ProductsContext);

  if (!productContext) {
    throw new Error('productContext has to be used within <ProductContext.Provider>');
  }

  return productContext;
};
