import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { CATEGORIES_ACTION_TYPES } from './category.types';
import { Category } from '../../types';
import { getCategoriesAndProducts } from '../../utils/firebase/products-firebase.utils';
import { createAction } from '../../utils/reducer/reducer.utils';

export const fetchCategoriesFailed = (error: string) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

export const fetchCategoriesStart = () => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categories: Category[]) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categories);

export const fetchCategoriesAsync = () => {
  return async (dispatch: ThunkDispatch<unknown, unknown, Action>): Promise<void> => {
    dispatch(fetchCategoriesStart());
    try {
      const categories = await getCategoriesAndProducts();
      dispatch(fetchCategoriesSuccess(categories));
    } catch (error) {
      dispatch(fetchCategoriesFailed(error as string));
    }
  };
};
