import { takeLatest, all, call, put } from 'typed-redux-saga';

import { fetchCategoriesFailed, fetchCategoriesSuccess } from './category.action';
import { CATEGORIES_ACTION_TYPES } from './category.types';
import { getCategoriesAndProducts } from '../../utils/firebase/products-firebase.utils';

export function* fetchCategoriesAsync() {
  try {
    const categories = yield* call(getCategoriesAndProducts);
    yield* put(fetchCategoriesSuccess(categories));
  } catch (error) {
    yield* put(fetchCategoriesFailed(error as string));
  }
}

export function* categoriesSagas() {
  yield* all([call(onFetchCategories)]);
}

/////////////////////////////////////////
/////////////////////////////////////////

function* onFetchCategories() {
  yield* takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync);
}
