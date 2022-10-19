import * as actions from "./action-types";

export const setProducts = (products) => {
  return {
    type: actions.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (products) => {
  return {
    type: actions.SELECTED_PRODUCTS,
    payload: products,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: actions.REMOVE_SELECTED_PRODUCT,
  };
};
