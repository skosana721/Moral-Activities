import { GET_TOTAL } from "./actionTypes";

const initialState = {
  maleLions: 8,
  femaleLions: 18,
  totalLions: 0,
};

export const lionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOTAL:
      let total = state.femaleLions + state.maleLions;
      return {
        ...state,
        totalLions: total,
      };
    default:
      return state;
  }
};
