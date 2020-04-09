import { ToursReducer, IToursState } from "./tours.reducer";
import { combineReducers } from "redux";

export interface IAppState {
  tours: IToursState;
}

export const MainReducer = combineReducers({
  tours: ToursReducer,
});
