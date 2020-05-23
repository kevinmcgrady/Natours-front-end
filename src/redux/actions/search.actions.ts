import { SearchActionTypes } from '../types/search.types';

export const SetSearchTerm = (searchTerm: string) => ({
  type: SearchActionTypes.SetSearchTerm,
  payload: { searchTerm },
});

export const SetSearchOption = (searchOption: string) => ({
  type: SearchActionTypes.SetSearchOption,
  payload: { searchOption },
});
