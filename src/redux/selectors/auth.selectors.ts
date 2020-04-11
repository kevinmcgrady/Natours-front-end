import { createSelector } from 'reselect';

import { IAppState } from '../reducers/main.reducer';

const authState = (state: IAppState) => state.auth;

export const selectAuthErrorMessage = createSelector(
  [authState],
  (auth) => auth.errorMessage,
);

export const selectAuthIsLoggedIn = createSelector(
  [authState],
  (auth) => auth.isLoggedIn,
);

export const selectAuthToken = createSelector(
  [authState],
  (auth) => auth.token,
);

export const selectLoggedInUser = createSelector(
  [authState],
  (auth) => auth.user,
);
