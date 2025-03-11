import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CategoriesState } from './category.types';
import { Category } from '../../types';

const INITIAL_STATE: CategoriesState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: INITIAL_STATE,
  reducers: {
    setCategories: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCategories } = categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;
