import {
  GET_TOTAL,
  REDUCE_FEMALE_NUMBER,
  REDUCE_MALE_NUMBER,
} from "./actionTypes";

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
export const reduceFemaleNumber = () => {
  return (dispatch) => {
    dispatch({ type: REDUCE_FEMALE_NUMBER });
  };
};
