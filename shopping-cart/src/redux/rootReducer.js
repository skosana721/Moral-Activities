import { combineReducers } from "redux";
import { cartReducer } from "./cart/cartReducer";
import { productReducer } from "./Product/productReducer";

export const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
});
