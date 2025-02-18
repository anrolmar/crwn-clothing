import { CATEGORIES_ACTION_TYPES } from './category.types';
import { Category } from '../../types';
import { createAction } from '../../utils/reducer/reducer.utils';

export const setCategories = (categories: Category[]) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories);
