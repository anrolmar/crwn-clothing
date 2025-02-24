import { createSelector } from 'reselect';

import { CategoryMap, CategoriesState } from './category.types';
import { RootState } from '../store';

const selectCategoryReducer = (state: RootState): CategoriesState => state.categories;

const selectCategories = createSelector([selectCategoryReducer], (categoriesSlice) => categoriesSlice.categories);

export const selectCategoriesMap = createSelector([selectCategories], (categories) =>
  categories.reduce((acc: CategoryMap, category) => {
    const { title, products } = category;

    acc[title.toLowerCase()] = products;
    return acc;
  }, {} as CategoryMap),
);

export const selectCategoriesIsLoading = createSelector([selectCategoryReducer], (categories) => categories.isLoading);
