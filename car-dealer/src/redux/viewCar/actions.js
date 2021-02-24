import { SELECTED_CAR } from "./actionTypes";
export const selectedCar = (data) => {
  return (dispatch) => {
    dispatch({ type: SELECTED_CAR, payload: data });
  };
};
