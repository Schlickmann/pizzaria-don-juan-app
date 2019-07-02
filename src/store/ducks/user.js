export const Types = {
  SIGN_UP_REQUEST: 'user/SIGN_UP_REQUEST',
  SIGN_UP_SUCCESS: 'user/SIGN_UP_SUCCESS',
  SIGN_UP_FAILURE: 'user/SIGN_UP_FAILURE',
};

/**
 * Reducer
 */
const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
  loading: false,
  error: null,
  message: '',
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SIGN_UP_REQUEST:
      return { ...state, loading: true };
    case Types.SIGN_UP_SUCCESS:
      return { ...state, message: action.payload.message, loading: false };
    case Types.SIGN_UP_FAILURE:
      return { ...state, error: action.payload.error, loading: false };
    default:
      return state;
  }
}

/**
 * Action Creators
 */
export const Creators = {
  signUpRequest: data => ({
    type: Types.SIGN_UP_REQUEST,
    payload: { data },
  }),
  signUpSuccess: data => ({
    type: Types.SIGN_UP_SUCCESS,
    payload: { data },
  }),
  signUpFailure: data => ({ type: Types.SIGN_UP_FAILURE, payload: { data } }),
};
