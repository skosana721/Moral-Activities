import { combineReducers } from "redux";
import { formReducer } from "./form/formReducer";
import { modalReducer } from "./Modal/modalReducer";

export const rootReducer = combineReducers({
  form: formReducer,
  modal: modalReducer,
});
