import { takeEvery } from "redux-saga/effects";

import * as actions from "../actions/actions";
import { logoutSaga } from "./auth";

export function* watchAuth() {
  yield takeEvery(actions.AUTH_INIT_LOGOUT, logoutSaga);
}
