import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';

import { rootEpic } from '../redux/effects/rootEffect';

import { MainReducer } from './reducers/main.reducer';

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  MainReducer,
  composeWithDevTools(applyMiddleware(epicMiddleware)),
);

// @ts-ignore
epicMiddleware.run(rootEpic);

export default store;
