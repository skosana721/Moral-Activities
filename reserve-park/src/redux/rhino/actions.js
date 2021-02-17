import {
  DECREMENT_FEMALE_RHINOS,
  DECREMENT_MALE_RHINOS,
  GET_RHINO_TOTAL,
  SAVE_FEMALE_RHINO_TOTAL,
  SAVE_MALE_RHINO_TOTAL,
} from "./actionTypes";

export const decrementMaleRhinos = () => {
  return (dispatch) => {
    dispatch({ type: DECREMENT_MALE_RHINOS });
  };
};
export const decrementFemaleRhinos = () => {
  return (dispatch) => {
    dispatch({ type: DECREMENT_FEMALE_RHINOS });
  };
};
export const getRhinoTotal = () => {
  return (dispatch) => {
    dispatch({ type: GET_RHINO_TOTAL });
  };
};
export const saveMaleRhinoTotal = (num) => {
  return (dispatch) => {
    dispatch({ type: SAVE_MALE_RHINO_TOTAL, payload: num });
  };
};
export const saveFemaleRhinoTotal = (num) => {
  return (dispatch) => {
    dispatch({ type: SAVE_FEMALE_RHINO_TOTAL, payload: num });
  };
};
