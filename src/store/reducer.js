import {
  initialState,
  SET_GROUP_SIZE,
  SET_ORDER_DATE,
  SET_ORDER_TYPE,
  SET_ORDER_TIME,
} from "./constants";

export const reducer = (state = initialState, action) => {
  if (action.type === SET_ORDER_TYPE) {
    state.orderType = action.orderType;
    return state;
  }
  if (action.type === SET_ORDER_DATE) {
    state.orderDate = action.orderDate;
    return state;
  }
  if (action.type === SET_GROUP_SIZE) {
    state.groupSize = action.groupSize;
    return state;
  }
  if (action.type === SET_ORDER_TIME) {
    state.orderTime = action.orderTime;
    return state;
  }
  return state;
};
