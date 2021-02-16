import {
  DECREMENT_FEMALE_RHINOS,
  DECREMENT_MALE_RHINOS,
  GET_RHINO_TOTAL,
} from "./actionTypes";

const initialState = {
  maleRhinos: 11,
  femaleRhinos: 23,
  totalRhinos: 0,
};

export const rhinoReducer = (state = initialState, action) => {
  switch (action.type) {
    case DECREMENT_MALE_RHINOS:
      return {
        ...state,
        maleRhinos: state.maleRhinos - 1,
      };
    case DECREMENT_FEMALE_RHINOS:
      return {
        ...state,
        femaleRhinos: state.femaleRhinos - 1,
      };
    case GET_RHINO_TOTAL:
      let total = state.femaleRhinos + state.maleRhinos;
      return {
        ...state,
        totalRhinos: total,
      };
    default:
      return state;
  }
};
