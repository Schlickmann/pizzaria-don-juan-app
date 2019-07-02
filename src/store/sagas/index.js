import { all, takeLatest } from 'redux-saga/effects';

import { Types as UserTypes } from '~/store/ducks/user';

import { getSignUpRequest } from './user';

export default function* rootSaga() {
  yield all([takeLatest(UserTypes.SIGN_UP_REQUEST, getSignUpRequest)]);
}
