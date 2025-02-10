import { useEffect, useState } from 'react';

import { CategoriesContext, CategoriesContextType } from './categories.context';
import { getCategoriesAndProducts } from '../../utils/firebase/products-firebase.utils';

type CategoriesContextProviderProps = {
  children: React.ReactNode;
};

export const CategoriesContextProvider = ({ children }: CategoriesContextProviderProps) => {
  const [categories, setCategories] = useState<CategoriesContextType['categories']>({});

  useEffect(() => {
    const getCategories = async () => {
      const categories = await getCategoriesAndProducts();
      setCategories(categories);
    };

    void getCategories();
  }, []);

  return <CategoriesContext.Provider value={{ categories }}>{children}</CategoriesContext.Provider>;
};
