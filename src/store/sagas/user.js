import { call, put } from 'redux-saga/effects';
import api from '~/services/api';

import { Creators as UserActions } from '../ducks/user';

export function* getSignUpRequest(action) {
  try {
    const response = yield call(api, {
      method: 'POST',
      url: '/signup',
      params: action.payload.data,
    });

    console.log(response);

    yield put(UserActions.signUpSuccess(response.data));
  } catch (err) {
    console.log(err);
    yield put(UserActions.signUpFailure('Something went wrong.'));
  }
}
