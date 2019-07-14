import { call, put } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import api from '~/services/api';
import { navigate } from '~/services/navigation';
import { Creators as ProductActions } from '../ducks/products';

export function* getProductsRequest() {
  try {
    const token = yield AsyncStorage.getItem('@token');
    const response = yield call(api, {
      method: 'GET',
      url: '/products',
      headers: { Authorization: `Bearer ${token}` },
    });

    if (response.data.error) {
      yield put(ProductActions.productsFailure(response.data));
    } else {
      yield put(ProductActions.productsSuccess(response.data));
    }
  } catch (err) {
    yield put(ProductActions.productsFailure('Something went wrong.'));
  }
}
