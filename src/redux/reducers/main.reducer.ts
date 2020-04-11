import { combineReducers } from 'redux';

import { IToursState, ToursReducer } from './tours.reducer';

export interface IAppState {
  tours: IToursState;
}

export const MainReducer = combineReducers({
  tours: ToursReducer,
});
