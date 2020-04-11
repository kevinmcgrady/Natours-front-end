import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
// tslint:disable-next-line
import storage from 'redux-persist/lib/storage';

import { AuthReducer, IAuthState } from './auth.reducer';
import { IToursState, ToursReducer } from './tours.reducer';

export interface IAppState {
  tours: IToursState;
  auth: IAuthState;
}

export const history = createBrowserHistory();

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

const MainReducer = combineReducers({
  tours: ToursReducer,
  auth: AuthReducer,
  router: connectRouter(history),
});

export default persistReducer(persistConfig, MainReducer);
