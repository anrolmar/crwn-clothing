import { Category, Product } from '../../types';

export interface CategoriesState {
  readonly categories: Category[];
  readonly error: string | null;
  readonly isLoading: boolean;
}

export enum CATEGORIES_ACTION_TYPES {
  FETCH_CATEGORIES_FAILED = 'categories/FETCH_CATEGORIES_FAILED',
  FETCH_CATEGORIES_START = 'categories/FETCH_CATEGORIES_START',
  FETCH_CATEGORIES_SUCCESS = 'categories/FETCH_CATEGORIES_SUCCESS',
}

export type CategoryMap = Record<string, Product[]>;
