import { GET_TOTAL, REDUCE_MALE_NUMBER } from "./actionTypes";
export const getTotal = () => {
  return (dispatch) => {
    dispatch({ type: GET_TOTAL });
  };
};

export const reduceMaleNumber = () => {
  return (dispatch) => {
    dispatch({ type: REDUCE_MALE_NUMBER });
  };
};
