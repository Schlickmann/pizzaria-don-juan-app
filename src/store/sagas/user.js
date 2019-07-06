import { call, put } from 'redux-saga/effects';
import api from '~/services/api';
import { navigate } from '~/services/navigation';
import { Creators as UserActions } from '../ducks/user';

export function* getSignUpRequest(action) {
  try {
    const response = yield call(api, {
      method: 'POST',
      url: '/signup',
      data: action.payload.data,
    });

    yield put(UserActions.signUpSuccess(response.data));
  } catch (err) {
    yield put(UserActions.signUpFailure('Something went wrong.'));
  }
}

export function* getSignInRequest(action) {
  try {
    const response = yield call(api, {
      method: 'POST',
      url: '/signin',
      data: action.payload.data,
    });

    yield put(UserActions.signInSuccess(response.data));
    navigate('Products');
  } catch (err) {
    yield put(UserActions.signInFailure('Something went wrong.'));
  }
}
