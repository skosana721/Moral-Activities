import { ADD_TO_CART } from "./actionTypes";

export const addToCart = (data) => {
  return (dispatch) => {
    dispatch({
      type: ADD_TO_CART,
      payload: data,
    });
  };
};
