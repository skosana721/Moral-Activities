import { combineReducers } from "redux";
import { productReducer } from "./store/Product/productReducer";

export const rootReducer = combineReducers({
  products: productReducer,
});
