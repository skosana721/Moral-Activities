import { ADD_TO_CART, CLEAR_CART } from "./actionTypes";

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
