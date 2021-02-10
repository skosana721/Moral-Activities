import { ADD_TO_CART, CLEAR_CART, GET_TOTAL_AMOUNT } from "./actionTypes";

const initialState = {
  cart: [],
  total: 0,
};
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    case GET_TOTAL_AMOUNT:
      let totalAmount = state.cart.reduce((cartTotal, cartItem) => {
        const { price } = cartItem;
        cartTotal += price;
        return cartTotal;
      }, 0);
      return {
        ...state,
        total: totalAmount,
      };
    default:
      return state;
  }
};
