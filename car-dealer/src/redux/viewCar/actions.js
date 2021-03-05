import { PURCHASED_CAR, SELECTED_CAR } from "./actionTypes";
export const selectedCar = (data) => {
  return (dispatch) => {
    dispatch({ type: SELECTED_CAR, payload: data });
  };
};
export const purchasedCar = () => {
  return (dispatch) => {
    dispatch({ type: PURCHASED_CAR });
  };
};
