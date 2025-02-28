import { Category, Product } from '../../types';

export interface CategoriesState {
  readonly categories: Category[];
}

export type CategoryMap = Record<string, Product[]>;
