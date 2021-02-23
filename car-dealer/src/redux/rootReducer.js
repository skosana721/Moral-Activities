import { combineReducers } from "redux";
import { registerFormReducer } from "./registerForm/registerFormReducer";
import { viewCarReducer } from "./viewCar/viewCarReducer";

export const rootReducer = combineReducers({
  register: registerFormReducer,
  view: viewCarReducer,
});
