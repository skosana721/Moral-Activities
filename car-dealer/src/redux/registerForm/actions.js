import { SAVE_REGISTER_FORM } from "./actionTypes";

export const saveRegisterForm = (data) => {
  return (dispatch) => {
    dispatch({ type: SAVE_REGISTER_FORM, payload: data });
  };
};
