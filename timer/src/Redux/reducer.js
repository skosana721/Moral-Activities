import { INCREMENT, START_TIMER } from "./actionTypes";

const initialState = {
  count: null,
  isActive: false,
  name: "wongani",
  // start: null?
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: action.payload,
      };
    case START_TIMER:
      return {
        ...state,
        isActive: true,
        count: action.payload
      };

    default:
      return state;
  }
};
