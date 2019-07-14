import { call, put } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
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

    if (response.data.error) {
      yield put(UserActions.signUpFailure(response.data));
    } else {
      yield put(UserActions.signUpSuccess(response.data));
      navigate('Login', { transition: 'FadeTransition' });
    }
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

    if (response.data.error) {
      yield put(UserActions.signInFailure(response.data));
    } else {
      yield put(UserActions.signInSuccess(response.data));
      try {
        yield AsyncStorage.setItem('@token', response.data.token);
      } catch (error) {
        console.tron.log(error);
      }
      navigate('Products', { transition: 'FadeTransition' });
    }
  } catch (err) {
    yield put(UserActions.signInFailure('Something went wrong.'));
  }
}
