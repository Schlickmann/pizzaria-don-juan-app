export const Types = {
  SIGN_UP_REQUEST: 'user/SIGN_UP_REQUEST',
  SIGN_UP_SUCCESS: 'user/SIGN_UP_SUCCESS',
  SIGN_UP_FAILURE: 'user/SIGN_UP_FAILURE',
  SIGN_IN_REQUEST: 'user/SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS: 'user/SIGN_IN_SUCCESS',
  SIGN_IN_FAILURE: 'user/SIGN_IN_FAILURE',
  SET_USER_NAME: 'user/SET_USER_NAME',
  SET_USER_EMAIL: 'user/SET_USER_EMAIL',
  SET_USER_PASS: 'user/SET_USER_PASS',
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
  token: null,
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SIGN_UP_REQUEST:
      return { ...state, loading: true };
    case Types.SIGN_UP_SUCCESS:
      return { ...state, message: action.payload.message, loading: false };
    case Types.SIGN_UP_FAILURE:
      return { ...state, error: action.payload.error, loading: false };
    case Types.SIGN_IN_REQUEST:
      return { ...state, loading: true };
    case Types.SIGN_IN_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
        token: action.payload.token,
        loading: false,
      };
    case Types.SIGN_IN_FAILURE:
      return { ...state, error: action.payload.error, loading: false };
    case Types.SET_USER_NAME:
      return { ...state, name: action.payload.name };
    case Types.SET_USER_EMAIL:
      return { ...state, email: action.payload.email };
    case Types.SET_USER_PASS:
      return { ...state, password: action.payload.password };
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
  signInRequest: data => ({
    type: Types.SIGN_IN_REQUEST,
    payload: { data },
  }),
  signInSuccess: data => ({
    type: Types.SIGN_IN_SUCCESS,
    payload: { data },
  }),
  signInFailure: data => ({ type: Types.SIGN_IN_FAILURE, payload: { data } }),
  setUserName: name => ({ type: Types.SET_USER_NAME, payload: { name } }),
  setUserEmail: email => ({ type: Types.SET_USER_EMAIL, payload: { email } }),
  setUserPassword: password => ({ type: Types.SET_USER_PASS, payload: { password } }),
};
