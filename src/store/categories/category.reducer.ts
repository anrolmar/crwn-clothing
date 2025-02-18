import { CATEGORIES_ACTION_TYPES, CategoriesAction, CategoriesState } from './category.types';

const INITIAL_STATE: CategoriesState = {
  categories: [],
};

export const categoriesReducer = (state = INITIAL_STATE, action: CategoriesAction): CategoriesState => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    default:
      return state;
  }
};
