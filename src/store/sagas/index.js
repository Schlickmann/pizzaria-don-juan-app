import { all, takeLatest } from 'redux-saga/effects';

import { Types as UserTypes } from '~/store/ducks/user';
import { Types as ProductTypes } from '~/store/ducks/products';
import { Types as ProductTypeTypes } from '~/store/ducks/productTypes';

import { getSignUpRequest, getSignInRequest } from './user';
import { getProductsRequest, setProductSelected } from './products';
import { getProductTypesRequest } from './productTypes';

export default function* rootSaga() {
  yield all([
    takeLatest(UserTypes.SIGN_UP_REQUEST, getSignUpRequest),
    takeLatest(UserTypes.SIGN_IN_REQUEST, getSignInRequest),
    takeLatest(ProductTypes.PRODUCTS_REQUEST, getProductsRequest),
    takeLatest(ProductTypes.PRODUCTS_SELECTED, setProductSelected),
    takeLatest(ProductTypeTypes.PRODUCT_TYPES_REQUEST, getProductTypesRequest),
  ]);
}
