import { createSelector } from 'reselect';

import { CategoriesState } from './category.types';
import { Product } from '../../types';

const selectCategoryReducer = ({ categories }: { categories: CategoriesState }) => categories;

const selectCategories = createSelector([selectCategoryReducer], (categoriesSlice) => categoriesSlice.categories);

export const selectCategoriesMap = createSelector([selectCategories], (categories) =>
  categories.reduce((acc: Record<string, Product[]>, category) => {
    const { title, products } = category;

    acc[title.toLowerCase()] = products;
    return acc;
  }, {}),
);

export const selectCategoriesIsLoading = createSelector([selectCategoryReducer], (categories) => categories.isLoading);
