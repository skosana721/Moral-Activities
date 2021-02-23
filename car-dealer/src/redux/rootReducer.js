import { combineReducers } from "redux";
import { registerFormReducer } from "./registerForm/registerFormReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { viewCarReducer } from "./viewCar/viewCarReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["register"],
};
const rootReducer = combineReducers({
  register: registerFormReducer,
  view: viewCarReducer,
});

export default persistReducer(persistConfig, rootReducer);
