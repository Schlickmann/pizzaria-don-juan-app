import { combineReducers } from 'redux';

import user from './user';
import products from './products';

const reducers = combineReducers({
  user,
  products,
});

export default reducers;
