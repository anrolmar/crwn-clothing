import { all, call } from 'typed-redux-saga';

import { categoriesSagas } from './categories/category.saga';
import { userSagas } from './user/user.saga';

export function* rootSaga() {
  yield* all([call(categoriesSagas), call(userSagas)]);
}
