import { all, takeLatest } from 'redux-saga/effects';

import { Types as UserTypes } from '~/store/ducks/user';

import { getSignUpRequest, getSignInRequest } from './user';

export default function* rootSaga() {
  yield all([
    takeLatest(UserTypes.SIGN_UP_REQUEST, getSignUpRequest),
    takeLatest(UserTypes.SIGN_IN_REQUEST, getSignInRequest),
  ]);
}
