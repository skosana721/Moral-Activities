import { combineReducers } from "redux";
import { registerFormReducer } from "./registerForm/registerFormReducer";

export const rootReducer = combineReducers({
  register: registerFormReducer,
});
