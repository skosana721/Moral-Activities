import { DECREMENT_MALE_RHINOS } from "./actionTypes";

export const decrementMaleRhinos = () => {
  return (dispatch) => {
    dispatch({ type: DECREMENT_MALE_RHINOS });
  };
};
