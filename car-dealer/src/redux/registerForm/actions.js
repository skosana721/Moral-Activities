import { SAVE_REGISTER_DATA } from "./actionTypes";

export const saveRegisterData = (data) => {
  return (dispatch) => {
    dispatch({ type: SAVE_REGISTER_DATA, payload: data });
  };
};
