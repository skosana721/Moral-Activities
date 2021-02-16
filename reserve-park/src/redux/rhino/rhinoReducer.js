import { DECREMENT_FEMALE_RHINOS, DECREMENT_MALE_RHINOS } from "./actionTypes";

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
    default:
      return state;
  }
};
