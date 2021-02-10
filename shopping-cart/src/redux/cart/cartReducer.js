import { ADD_TO_CART } from "./actionTypes";

const initialState = {
  cart: [],
  total: "0",
};
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};
