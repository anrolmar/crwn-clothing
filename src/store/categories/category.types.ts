import { Category, Product } from '../../types';

export interface CategoriesState {
  categories: Category[];
  error?: string;
  isLoading: boolean;
}

export enum CATEGORIES_ACTION_TYPES {
  FETCH_CATEGORIES_FAILED = 'categories/FETCH_CATEGORIES_FAILED',
  FETCH_CATEGORIES_START = 'categories/FETCH_CATEGORIES_START',
  FETCH_CATEGORIES_SUCCESS = 'categories/FETCH_CATEGORIES_SUCCESS',
}

export type CategoriesMap = Record<string, Product[]>;

export type CategoriesAction = {
  type: CATEGORIES_ACTION_TYPES.SET_CATEGORIES;
  payload: Category[];
};
