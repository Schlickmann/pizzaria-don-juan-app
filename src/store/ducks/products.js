export const Types = {
  PRODUCTS_REQUEST: 'product/PRODUCTS_REQUEST',
  PRODUCTS_SUCCESS: 'product/PRODUCTS_SUCCESS',
  PRODUCTS_FAILURE: 'product/PRODUCTS_FAILURE',
};

/**
 * Reducer
 */
const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null,
  message: '',
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.PRODUCTS_REQUEST:
      return { ...state, loading: true };
    case Types.PRODUCTS_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
        loading: false,
        data: action.payload.products,
      };
    case Types.PRODUCTS_FAILURE:
      return { ...state, error: action.payload.error, loading: false };
    default:
      return state;
  }
}

/**
 * Action Creators
 */
export const Creators = {
  productsRequest: () => ({
    type: Types.PRODUCTS_REQUEST,
  }),
  productsSuccess: data => ({
    type: Types.PRODUCTS_SUCCESS,
    payload: { data },
  }),
  productsFailure: data => ({ type: Types.PRODUCTS_FAILURE, payload: { data } }),
};
