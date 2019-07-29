import * as actions from "../actions/actions";
import axios from "axios";

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
  return dispatch => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        const userId = localStorage.getItem("userId");
        dispatch(authSuccess(token, userId));
        dispatch(
          checkAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          )
        );
      }
    }
  };
};
