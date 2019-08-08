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

export function* setProductTypeSelected(action) {
  try {
    // yield AsyncStorage.clear();
    let products = yield AsyncStorage.getItem('@products');

    if (!products) {
      products = [];
    } else {
      products = JSON.parse(products);
      products[products.length - 1].productTypeId = action.payload.productTypeId;
    }

    yield AsyncStorage.setItem('@products', JSON.stringify(products));

    // navigate('ProductSizes', { transition: 'SlideFromBottom' });
  } catch (error) {
    console.tron.log(error);
  }
}
