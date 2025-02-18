import { createSelector } from 'reselect';

import { Product } from '../../types';
import { RootState } from '../store';

const selectCategoryReducer = (state: RootState) => state.categories;

const selectCategories = createSelector([selectCategoryReducer], (categoriesSlice) => categoriesSlice.categories);

export const selectCategoriesMap = createSelector([selectCategories], (categories) =>
  categories.reduce((acc: Record<string, Product[]>, category) => {
    const { title, products } = category;

    acc[title.toLowerCase()] = products;
    return acc;
  }, {}),
);
