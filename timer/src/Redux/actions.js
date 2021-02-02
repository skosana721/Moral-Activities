import { INCREMENT, START_TIMER } from "./actionTypes";

export const updateState = (data) => {
  return (dispatch) => {
    dispatch({ type: INCREMENT, payload: data });
  };
};
export const startTimer = (data) => {
    return (dispatch) => {
        dispatch({type: START_TIMER, payload:data})
    }
}
