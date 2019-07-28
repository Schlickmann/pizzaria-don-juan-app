import { call, put } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import api from '~/services/api';
import { Creators as ProductTypeActions } from '../ducks/productTypes';

export function* getProductTypesRequest() {
  try {
    const token = yield AsyncStorage.getItem('@token');
    let products = yield AsyncStorage.getItem('@products');
    products = JSON.parse(products);
    
    const response = yield call(api, {
      method: 'GET',
      url: `/product_types/${products[products.length - 1].productId}`,
      headers: { Authorization: `Bearer ${token}` },
    });

    if (response.data.error) {
      yield put(ProductTypeActions.productTypesFailure(response.data));
    } else {
      yield put(ProductTypeActions.productTypesSuccess(response.data));
    }
  } catch (err) {
    yield put(ProductTypeActions.productTypesFailure('Something went wrong.'));
  }
}
