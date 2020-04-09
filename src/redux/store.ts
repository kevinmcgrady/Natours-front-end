import { createStore, applyMiddleware } from "redux";
import { MainReducer } from "./reducers/main.reducer";
import { createEpicMiddleware } from "redux-observable";
import { composeWithDevTools } from "redux-devtools-extension";

import { rootEpic } from "../redux/effects/rootEffect";

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  MainReducer,
  composeWithDevTools(applyMiddleware(epicMiddleware))
);

// @ts-ignore
epicMiddleware.run(rootEpic);

export default store;
