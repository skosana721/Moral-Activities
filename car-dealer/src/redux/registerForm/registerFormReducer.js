import { SAVE_REGISTER_DATA } from "./actionTypes";

const initialState = {
  registerForm: [],
};

export const registerFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_REGISTER_DATA:
      return {
        ...state,
        registerForm: [...state.registerForm, action.payload],
      };
    default:
      return state;
  }
};
