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

export function* setProductSelected(action) {
  try {
    // yield AsyncStorage.clear();
    let products = yield AsyncStorage.getItem('@products');

    if (!products) {
      products = [];
    } else {
      products = JSON.parse(products);
    }

    products.push({ productId: action.payload.productId });

    yield AsyncStorage.setItem('@products', JSON.stringify(products));

    navigate('ProductTypes', { transition: 'SlideFromBottom' });
  } catch (error) {
    console.tron.log(error);
  }
}
