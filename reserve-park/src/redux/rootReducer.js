import { combineReducer } from "react-redux";
import { lionReducer } from "./lion/lionReducer";
import { rhinoReducer } from "./rhino/rhinoReducer";

export const rootReducer = combineReducer({
  lion: lionReducer,
  rhino: rhinoReducer,
});
