import {
  DECREMENT_FEMALE_RHINOS,
  DECREMENT_MALE_RHINOS,
  GET_RHINO_TOTAL,
  SAVE_FEMALE_RHINO_TOTAL,
  SAVE_MALE_RHINO_TOTAL,
} from "./actionTypes";

const initialState = {
  maleRhinos: 0,
  femaleRhinos: 0,
  totalRhinos: 0,
};

export const rhinoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_MALE_RHINO_TOTAL:
      return {
        ...state,
        maleRhinos: Number(action.payload),
      };
    case SAVE_FEMALE_RHINO_TOTAL:
      return {
        ...state,
        femaleRhinos: Number(action.payload),
      };
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
      console.log(total);
      return {
        ...state,
        totalRhinos: total,
      };
    default:
      return state;
  }
};
