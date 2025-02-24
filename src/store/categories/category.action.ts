import { CATEGORIES_ACTION_TYPES } from './category.types';
import { Category } from '../../types';
import { createAction, Action, ActionWithPayload, withMatcher } from '../../utils/reducer/reducer.utils';

type FetchCategoriesFailed = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, string>;
type FetchCategoriesStart = Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>;
type FetchCategoriesSuccess = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, Category[]>;

export const fetchCategoriesFailed = withMatcher(
  (error: string): FetchCategoriesFailed => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error),
);

export const fetchCategoriesStart = withMatcher(
  (): FetchCategoriesStart => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START),
);

export const fetchCategoriesSuccess = withMatcher(
  (categories: Category[]): FetchCategoriesSuccess =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categories),
);
