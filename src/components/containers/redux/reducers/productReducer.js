import * as types from "../actions/action-types";

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};
export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case types.SELECTED_PRODUCTS:
      return { ...state, ...payload };
    case types.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
