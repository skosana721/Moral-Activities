import { GET_TOTAL } from "./actions";

export const getTotal = () => {
  return (dispatch) => {
    dispatch({ type: GET_TOTAL });
  };
};
