import { GET_TOTAL } from "./actionTypes";
export const getTotal = () => {
  return (dispatch) => {
    dispatch({ type: GET_TOTAL });
  };
};
