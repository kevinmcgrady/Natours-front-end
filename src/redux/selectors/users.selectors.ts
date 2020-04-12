import { createSelector } from 'reselect';

import { IAppState } from '../reducers/main.reducer';

const usersState = (state: IAppState) => state.users;

export const selectErrorMessage = createSelector(
  [usersState],
  (users) => users.errorMessage,
);

export const selectSuccessMessage = createSelector(
  [usersState],
  (users) => users.successMessage,
);
