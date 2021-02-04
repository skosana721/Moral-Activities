import { MODAL_CLOSE, MODAL_OPEN } from "./actionTypes";
export const modalOpen = () => {
  return (dispatch) => {
    dispatch({ type: MODAL_OPEN });
  };
};
export const modalClose = () => {
  return (dispatch) => {
    dispatch({ type: MODAL_CLOSE });
  };
};
