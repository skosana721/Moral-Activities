import { SAVE_REGISTER_DATA } from "./actionTypes";

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
    default:
      return state;
  }
};
