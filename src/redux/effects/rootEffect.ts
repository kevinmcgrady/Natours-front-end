import { combineEpics } from 'redux-observable';

import fetchTokenEpic from '../effects/auth.effects';
import fetchToursEpic from '../effects/tours.effects';

export const rootEpic = combineEpics(fetchToursEpic, fetchTokenEpic);
