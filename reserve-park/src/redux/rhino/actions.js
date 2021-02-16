import { DECREMENT_FEMALE_RHINOS, DECREMENT_MALE_RHINOS } from "./actionTypes";

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
