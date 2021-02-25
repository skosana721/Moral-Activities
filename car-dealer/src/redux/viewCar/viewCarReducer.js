import { SELECTED_CAR } from "./actionTypes";

const initialState = {
  viewCars: [],
};
export const viewCarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_CAR:
      const newList = [...state.viewCars, action.payload];
      const filteredList = newList.reduce((acc, currCar) => {
        const carList = acc.find((car) => car.id === currCar.id);

        if (!carList) {
          return acc.concat([currCar]);
        } else {
          return acc;
        }
      }, []);

      return {
        ...state,
        viewCars: filteredList,
      };
    default:
      return state;
  }
};
