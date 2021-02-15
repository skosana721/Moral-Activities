import { combineReducers } from "redux";
import { lionReducer } from "./lion/lionReducer";
import { rhinoReducer } from "./rhino/rhinoReducer";

export const rootReducer = combineReducers({
  lion: lionReducer,
  rhino: rhinoReducer,
});
