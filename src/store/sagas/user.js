import { call, put } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';
import api from '~/services/api';

import { Creators as UserActions } from '../ducks/user';

export function* getSignUpRequest(action) {
  try {
    const response = yield call(api, {
      method: 'POST',
      url: '/signup',
      data: action.payload.data,
    });

    yield put(NavigationActions.navigate({ routeName: 'Products' }));
    yield put(UserActions.signUpSuccess(response.data));
  } catch (err) {
    console.log(err);
    yield put(UserActions.signUpFailure('Something went wrong.'));
  }
}

export function* getSignInRequest(action) {
  try {
    console.log(action);
    const response = yield call(api, {
      method: 'POST',
      url: '/signin',
      data: action.payload.data,
    });

    console.log(response);

    yield put(UserActions.signInSuccess(response.data));
  } catch (err) {
    console.log(err);
    yield put(UserActions.signInFailure('Something went wrong.'));
  }
}
