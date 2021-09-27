import { combineReducers } from "redux";
import { carReducer } from "./Car/carReducer";

export const reducers = combineReducers({
  date: carReducer,
});
