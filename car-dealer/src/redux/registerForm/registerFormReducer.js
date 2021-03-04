import { CLOSE_MODEL, SAVE_REGISTER_DATA } from "./actionTypes";

const initialState = {
  registerForm: [],
  modelContent: "",
  isModelOpen: false,
};

export const registerFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_REGISTER_DATA:
      return {
        ...state,
        isModelOpen: !state.isModelOpen,
        modelContent: "Form submitted successfully",
        registerForm: [...state.registerForm, action.payload],
      };
    case CLOSE_MODEL:
      return {
        ...state,
        isModelOpen: false,
      };
    default:
      return state;
  }
};
