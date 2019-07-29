import { takeEvery } from "redux-saga/effects";

import * as actions from "../actions/actions";
import {
  logoutSaga,
  checkAuthTimeoutSaga,
  authSaga,
  authCheckStateSaga
} from "./auth";

import { initIngredientsSaga } from "./burgerBuilder";
import { purchaseBurgerSaga, fetchOrdersSaga } from "./orders";

export function* watchAuth() {
  yield takeEvery(actions.AUTH_INIT_LOGOUT, logoutSaga);
  yield takeEvery(actions.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
  yield takeEvery(actions.AUTH_LOGIN, authSaga);
  yield takeEvery(actions.AUTH_CHECK_LOGIN, authCheckStateSaga);
}

export function* watchBurgerBuilder() {
  yield takeEvery(actions.BURGER_INIT_INGREDIENTS, initIngredientsSaga);
}

export function* watchOrders() {
  yield takeEvery(actions.PURCHASE_BURGER_SAGA, purchaseBurgerSaga);
  yield takeEvery(actions.FETCH_ORDERS_SAGA, fetchOrdersSaga);
}
