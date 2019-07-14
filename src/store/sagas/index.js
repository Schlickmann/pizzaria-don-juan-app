import { all, takeLatest } from 'redux-saga/effects';

import { Types as UserTypes } from '~/store/ducks/user';
import { Types as ProductTypes } from '~/store/ducks/products';

import { getSignUpRequest, getSignInRequest } from './user';
import { getProductsRequest } from './products';

export default function* rootSaga() {
  yield all([
    takeLatest(UserTypes.SIGN_UP_REQUEST, getSignUpRequest),
    takeLatest(UserTypes.SIGN_IN_REQUEST, getSignInRequest),
    takeLatest(ProductTypes.PRODUCTS_REQUEST, getProductsRequest),
  ]);
}
