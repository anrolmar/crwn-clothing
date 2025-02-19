import { CATEGORIES_ACTION_TYPES, CategoriesAction, CategoriesState } from './category.types';

const INITIAL_STATE: CategoriesState = {
  categories: [],
  isLoading: false,
  error: undefined,
};

export const categoriesReducer = (state = INITIAL_STATE, action: CategoriesAction): CategoriesState => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
      return { ...state, isLoading: true };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
