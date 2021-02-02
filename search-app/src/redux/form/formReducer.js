import { SAVE_INFO } from "./actionTypes";

const initialState = {
  formInfo: [],
};
export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_INFO:
      return {...state, formInfo: action.payload};

    default:
      return state;
  }
};
