import {
  ADD_TO_CART,
  CLEAR_CART,
  DECREASE_AMOUNT,
  GET_TOTAL_AMOUNT,
  INCREASE_AMOUNT,
  REMOVE_PRODUCT,
} from "./actionTypes";

const initialState = {
  cart: [],
  total: 0,
  amount: 1,
};
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newCart = [...state.cart, action.payload];
      const filterArr = newCart.reduce((acc, curr) => {
        const cartItem = acc.find((item) => item.id === curr.id);
        if (!cartItem) {
          return acc.concat([curr]);
        } else {
          return acc;
        }
      }, []);

      return {
        ...state,
        cart: filterArr,
      };
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    case GET_TOTAL_AMOUNT:
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;
          cartTotal.total += itemTotal;
          cartTotal.amount += amount;
          return cartTotal;
        },
        { total: 0, amount: 0 }
      );
      return {
        ...state,
        total,
        amount,
      };
    case REMOVE_PRODUCT:
      const removedItem = state.cart.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        cart: removedItem,
      };
    case INCREASE_AMOUNT:
      const tempCart = state.cart.map((item) => {
        if (item.id === action.payload) {
          item = { ...item, amount: item.amount + 1 };
        }
        return item;
      });

      return {
        ...state,
        cart: tempCart,
      };
    case DECREASE_AMOUNT:
      let decrease = [];
      if (action.payload.amount === 1) {
        decrease = state.cart.filter((item) => item.id !== action.payload.id);
      } else {
        decrease = state.cart.map((item) => {
          if (item.id === action.payload.id) {
            item = { ...item, amount: item.amount - 1 };
          }
          return item;
        });
      }
      return {
        ...state,
        cart: decrease,
      };
    default:
      return state;
  }
};
