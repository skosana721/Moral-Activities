import { combineReducer } from "react-redux";
import { lionReducer } from "./lion/lionReducer";

export const rootReducer = combineReducer({
  lion: lionReducer,
});
