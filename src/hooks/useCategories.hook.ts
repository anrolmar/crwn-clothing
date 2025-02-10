import { useContext } from 'react';

import { CategoriesContext } from '../contexts/categories/categories.context';

export const useCategories = () => {
  const categoriesContext = useContext(CategoriesContext);

  if (!categoriesContext) {
    throw new Error('categoriesContext has to be used within <CategoriesContext.Provider>');
  }

  return categoriesContext;
};
