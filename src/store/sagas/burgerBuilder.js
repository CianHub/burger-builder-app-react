import * as actions from "../actions/index";
import { put } from "@redux-saga/core/effects";
import { instance } from "../../axios-orders";

export function* initIngredientsSaga(action) {
  try {
    const response = yield instance.get("/ingredients.json");
    yield put(actions.setIngredients(response.data));
  } catch (error) {
    yield put(actions.fetchIngredientsFailed());
  }
}
