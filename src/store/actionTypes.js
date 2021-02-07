import {
  SET_GROUP_SIZE,
  SET_ORDER_DATE,
  SET_ORDER_TYPE,
  SET_ORDER_TIME,
} from "./constants";

export function setOrderType(orderType) {
  return {
    type: SET_ORDER_TYPE,
    orderType: orderType,
  };
}
export function setOrderDate(orderDate) {
  return {
    type: SET_ORDER_DATE,
    orderDate: orderDate,
  };
}
export function setGroupSize(groupSize) {
  return {
    type: SET_GROUP_SIZE,
    groupSize: groupSize,
  };
}

export function setOrderTime(orderTime) {
  return {
    type: SET_ORDER_TIME,
    orderTime: orderTime,
  };
}
