import { createSelector } from 'reselect';

import { IAppState } from '../reducers/main.reducer';

const authState = (state: IAppState) => state.auth;

export const selectAuthErrorMessage = createSelector(
  [authState],
  (auth) => auth.errorMessage,
);
