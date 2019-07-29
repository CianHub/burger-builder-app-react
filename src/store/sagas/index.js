import { takeEvery } from "redux-saga/effects";

import * as actions from "../actions/actions";
import { logoutSaga, checkAuthTimeoutSaga, authSaga } from "./auth";

export function* watchAuth() {
  yield takeEvery(actions.AUTH_INIT_LOGOUT, logoutSaga);
  yield takeEvery(actions.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
  yield takeEvery(actions.AUTH_LOGIN, authSaga);
}
