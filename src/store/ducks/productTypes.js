export const Types = {
  PRODUCT_TYPES_REQUEST: 'productType/PRODUCT_TYPES_REQUEST',
  PRODUCT_TYPES_SUCCESS: 'productType/PRODUCT_TYPES_SUCCESS',
  PRODUCT_TYPES_FAILURE: 'productType/PRODUCT_TYPES_FAILURE',
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
    case Types.PRODUCT_TYPES_REQUEST:
      return { ...state, loading: true };
    case Types.PRODUCT_TYPES_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
        loading: false,
        data: action.payload.data.productTypes,
      };
    case Types.PRODUCT_TYPES_FAILURE:
      return { ...state, error: action.payload.error, loading: false };
    default:
      return state;
  }
}

/**
 * Action Creators
 */
export const Creators = {
  productTypesRequest: () => ({
    type: Types.PRODUCT_TYPES_REQUEST,
  }),
  productTypesSuccess: data => ({
    type: Types.PRODUCT_TYPES_SUCCESS,
    payload: { data },
  }),
  productTypesFailure: data => ({ type: Types.PRODUCT_TYPES_FAILURE, payload: { data } }),
};
