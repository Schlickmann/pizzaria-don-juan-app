import { combineReducers } from 'redux';

import user from './user';
import products from './products';
import productTypes from './productTypes';

const reducers = combineReducers({
  user,
  products,
  productTypes,
});

export default reducers;
