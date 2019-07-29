import * as actions from "./actions";
import { instance } from "../../axios-orders";

export const purchaseBurgerSuccess = (orderId, orderData) => {
  return {
    type: actions.PURCHASE_BURGER_SUCCESS,
    orderId,
    orderData
  };
};

export const purchaseBurgerFail = error => {
  return {
    type: actions.PURCHASE_BURGER_FAIL,
    error
  };
};

export const purchaseBurgerStart = () => {
  return {
    type: actions.PURCHASE_BURGER_START
  };
};

export const purchaseBurger = (orderData, token) => {
  return {
    type: actions.PURCHASE_BURGER_SAGA,
    orderData,
    token
  };
};

export const purchaseInit = () => {
  return {
    type: actions.PURCHASE_INIT
  };
};

export const fetchOrdersSuccess = orders => {
  return {
    type: actions.FETCH_ORDERS_SUCCESS,
    orders
  };
};

export const fetchOrdersFail = error => {
  return {
    type: actions.FETCH_ORDERS_FAIL,
    error
  };
};

export const fetchOrdersStart = () => {
  return {
    type: actions.FETCH_ORDERS_START
  };
};
export const fetchOrders = (token, userId) => {
  return { type: actions.FETCH_ORDERS_SAGA, token, userId };
};
