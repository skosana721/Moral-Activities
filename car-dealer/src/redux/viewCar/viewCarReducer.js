import { SELECTED_CAR } from "./actionTypes";

const initialState = {
  viewCars: [],
};
export const viewCarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_CAR:
      return {
        ...state,
        viewCars: [...state.viewCars, action.payload],
      };
    default:
      return state;
  }
};
