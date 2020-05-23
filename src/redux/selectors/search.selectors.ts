import { createSelector } from 'reselect';

import { IAppState } from '../reducers/main.reducer';

const searchState = (state: IAppState) => state.search;

export const selectSearchTerm = createSelector(
  [searchState],
  (search) => search.searchTerm,
);

export const selectSearchOption = createSelector(
  [searchState],
  (search) => search.searchOption,
);
