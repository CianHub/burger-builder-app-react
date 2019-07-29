import * as actions from "../actions/auth";
import { put } from "@redux-saga/core/effects";
import { delay } from "redux-saga/effects";
import axios from "axios";

export function* logoutSaga(action) {
  yield localStorage.removeItem("token");
  yield localStorage.removeItem("expirationDate");
  yield localStorage.removeItem("userId");
  yield put(actions.logoutSuccess());
}

export function* checkAuthTimeoutSaga(action) {
  yield delay(action.expirationTime * 1000);
  yield put(actions.logout());
}

export function* authSaga(action) {
  yield put(actions.authStart());

  let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${
    process.env.REACT_APP_API_KEY
  }`;

  if (action.isSignUp === false) {
    url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${
      process.env.REACT_APP_API_KEY
    }`;
  }
  try {
    const response = yield axios.post(url, {
      email: action.email,
      password: action.password,
      returnSecureToken: true
    });

    const expirationDate = yield new Date(
      new Date().getTime() + response.data.expiresIn * 1000
    );

    yield localStorage.setItem("token", response.data.idToken);
    yield localStorage.setItem("expirationDate", expirationDate);
    yield localStorage.setItem("userId", response.data.localId);
    yield put(
      actions.authSuccess(response.data.idToken, response.data.localId)
    );
    yield put(actions.checkAuthTimeout(response.data.expiresIn));
  } catch (error) {
    yield put(actions.authFail(error.response.data.error));
  }
}
