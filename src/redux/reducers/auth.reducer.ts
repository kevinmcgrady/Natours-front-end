import { AuthActionTypes } from '../types/auth.types';

export interface IAuthState {
  token: string | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  errorMessage: string;
}

const initialState: IAuthState = {
  token: null,
  isLoggedIn: false,
  isLoading: false,
  errorMessage: '',
};

export const AuthReducer = (
  state: IAuthState = initialState,
  action: { type: string; payload?: any },
) => {
  switch (action.type) {
    case AuthActionTypes.FetchToken:
      return {
        ...state,
        isLoading: true,
      };
    case AuthActionTypes.StoreToken:
      return {
        ...state,
        isLoading: false,
        token: action.payload.token,
        isLoggedIn: true,
      };
    case AuthActionTypes.StoreError:
      return {
        ...state,
        isLoading: false,
        token: null,
        isLoggedIn: false,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
};
