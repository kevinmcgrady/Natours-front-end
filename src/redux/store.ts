import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';
import { persistStore } from 'redux-persist';

import { rootEpic } from '../redux/effects/rootEffect';
import { history } from '../redux/reducers/main.reducer';

import MainReducer from './reducers/main.reducer';

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  MainReducer,
  composeWithDevTools(
    applyMiddleware(epicMiddleware, routerMiddleware(history)),
  ),
);

// @ts-ignore
epicMiddleware.run(rootEpic);

const persistor = persistStore(store);

export { store, persistor };
