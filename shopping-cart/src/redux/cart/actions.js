import {
  ADD_TO_CART,
  CLEAR_CART,
  GET_TOTAL_AMOUNT,
  REMOVE_PRODUCT,
} from "./actionTypes";

export const addToCart = (data) => {
  return (dispatch) => {
    dispatch({
      type: ADD_TO_CART,
      payload: data,
    });
  };
};
export const clearCart = () => {
  return (dispatch) => {
    dispatch({ type: CLEAR_CART });
  };
};
export const getTotalAmount = () => {
  return (dispatch) => {
    dispatch({ type: GET_TOTAL_AMOUNT });
  };
};
export const removeProduct = (id) => {
  return (dispatch) => {
    dispatch({ type: REMOVE_PRODUCT, payload: id });
  };
};
