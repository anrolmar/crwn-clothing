import { UnknownAction } from 'redux';

import { fetchCategoriesFailed, fetchCategoriesStart, fetchCategoriesSuccess } from './category.action';
import { CategoriesState } from './category.types';

const INITIAL_STATE: CategoriesState = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesReducer = (state = INITIAL_STATE, action: UnknownAction): CategoriesState => {
  if (fetchCategoriesStart.match(action)) {
    return { ...state, isLoading: true };
  }

  if (fetchCategoriesSuccess.match(action)) {
    return {
      ...state,
      categories: action.payload,
      isLoading: false,
    };
  }

  if (fetchCategoriesFailed.match(action)) {
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    };
  }

  return state;
};
