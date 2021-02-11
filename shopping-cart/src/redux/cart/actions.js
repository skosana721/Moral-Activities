import {
  ADD_TO_CART,
  CLEAR_CART,
  GET_TOTAL_AMOUNT,
  REMOVE_PRODUCT,
  INCREASE_AMOUNT,
  DECREASE_AMOUNT,
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
export const increaseAmount = (id) => {
  return (dispatch) => {
    dispatch({ type: INCREASE_AMOUNT, payload: id });
  };
};
export const decreaseAmount = (id, amount) => {
  return (dispatch) => {
    dispatch({ type: DECREASE_AMOUNT, payload: { id, amount } });
  };
};
