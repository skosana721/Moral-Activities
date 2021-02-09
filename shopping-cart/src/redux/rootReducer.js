import { combineReducers } from "redux";
import { productReducer } from "./Product/productReducer";

export const rootReducer = combineReducers({
  products: productReducer,
});
