import {
  GET_TOTAL,
  REDUCE_FEMALE_NUMBER,
  REDUCE_MALE_NUMBER,
  SAVE_FEMALE_TOTAL,
  SAVE_MALE_TOTAL,
} from "./actionTypes";

const initialState = {
  maleLions: 0,
  femaleLions: 0,
  totalLions: 0,
};

export const lionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_MALE_TOTAL:
      return {
        ...state,
        maleLions: action.payload,
      };
    case SAVE_FEMALE_TOTAL:
      return {
        ...state,
        femaleLions: action.payload,
      };
    case REDUCE_MALE_NUMBER:
      return {
        ...state,
        maleLions: state.maleLions - 1,
      };
    case REDUCE_FEMALE_NUMBER:
      return {
        ...state,
        femaleLions: state.femaleLions - 1,
      };
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
