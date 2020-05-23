import { SearchActionTypes } from '../types/search.types';

export interface ISearchState {
  searchTerm: string;
  searchOption: string;
}

const initialState: ISearchState = {
  searchTerm: '',
  searchOption: '',
};

export const SearchReducer = (
  state: ISearchState = initialState,
  action: { type: string; payload?: any },
) => {
  switch (action.type) {
    case SearchActionTypes.SetSearchTerm:
      return {
        ...state,
        searchTerm: action.payload.searchTerm,
      };
    case SearchActionTypes.SetSearchOption:
      return {
        ...state,
        searchOption: action.payload.searchOption,
      };
    default:
      return state;
  }
};
