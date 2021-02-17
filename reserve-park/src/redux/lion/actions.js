import {
  GET_TOTAL,
  REDUCE_FEMALE_NUMBER,
  REDUCE_MALE_NUMBER,
  SAVE_FEMALE_TOTAL,
  SAVE_MALE_TOTAL,
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
export const saveMaleTotal = (num) => {
  return (dispatch) => {
    dispatch({ type: SAVE_MALE_TOTAL, payload: num });
  };
};
export const saveFemaleTotal = (num) => {
  return (dispatch) => {
    dispatch({ type: SAVE_FEMALE_TOTAL, payload: num });
  };
};
