import { Category, Product } from '../../types';

export interface CategoriesState {
  categories: Category[];
}

export enum CATEGORIES_ACTION_TYPES {
  SET_CATEGORIES = 'category/SET_CATEGORIES',
}

export type CategoriesMap = Record<string, Product[]>;

export interface CategoriesAction {
  type: CATEGORIES_ACTION_TYPES;
  payload: Category[];
}
