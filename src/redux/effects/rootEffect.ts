import { combineEpics } from "redux-observable";
import fetchToursEpic from "../effects/tours.effects";

export const rootEpic = combineEpics(fetchToursEpic);
