import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
// tslint:disable-next-line
import storage from 'redux-persist/lib/storage';

import { AuthReducer, IAuthState } from './auth.reducer';
import { IToursState, ToursReducer } from './tours.reducer';
import { IUsersState, UsersReducer } from './user.reducer';

export interface IAppState {
  tours: IToursState;
  auth: IAuthState;
  users: IUsersState;
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
  users: UsersReducer,
  router: connectRouter(history),
});

export default persistReducer(persistConfig, MainReducer);
