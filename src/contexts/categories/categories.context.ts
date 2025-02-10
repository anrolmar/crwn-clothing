import { createContext } from 'react';

import { Product } from '../../types';

export type CategoriesContextType = {
  categories: Record<string, Product[]>;
};

export const CategoriesContext = createContext({} as CategoriesContextType);
