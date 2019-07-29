import * as actions from "../actions/actions";

export const authStart = () => {
  return {
    type: actions.AUTH_START
  };
};

export const authSuccess = (idToken, localId) => {
  return {
    type: actions.AUTH_SUCCESS,
    idToken,
    localId
  };
};

export const authFail = error => {
  return {
    type: actions.AUTH_FAIL,
    error
  };
};

export const logout = () => {
  return {
    type: actions.AUTH_INIT_LOGOUT
  };
};

export const logoutSuccess = () => {
  return {
    type: actions.LOGOUT
  };
};

export const checkAuthTimeout = expirationTime => {
  return { type: actions.AUTH_CHECK_TIMEOUT, expirationTime };
};

export const setAuthRedirectPath = authRedirectPath => {
  return {
    type: actions.SET_AUTH_REDIRECT,
    path: authRedirectPath
  };
};

export const auth = (email, password, isSignUp) => {
  return { type: actions.AUTH_LOGIN, email, password, isSignUp };
};

export const authCheckState = () => {
  return { type: actions.AUTH_CHECK_LOGIN };
};
