import { CLOSE_MODEL, SAVE_REGISTER_DATA } from "./actionTypes";

export const saveRegisterData = (data) => {
  return (dispatch) => {
    dispatch({ type: SAVE_REGISTER_DATA, payload: data });
  };
};

export const closeModel = () => {
  return (dispatch) => {
    dispatch({ type: CLOSE_MODEL });
  };
};
