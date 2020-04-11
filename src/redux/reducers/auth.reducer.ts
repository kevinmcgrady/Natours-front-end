import { IUser } from '../../models/user.model';
import { AuthActionTypes } from '../types/auth.types';

export interface IAuthState {
  token: string | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  errorMessage: string;
  user: IUser | null;
}

const initialState: IAuthState = {
  token: null,
  isLoggedIn: false,
  isLoading: false,
  errorMessage: '',
  user: null,
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
    case AuthActionTypes.StoreLogedInUser:
      return {
        ...state,
        user: action.payload.user,
      };
    case AuthActionTypes.StoreError:
      return {
        ...state,
        isLoading: false,
        token: null,
        isLoggedIn: false,
        errorMessage: action.payload.errorMessage,
      };
    case AuthActionTypes.Logout:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        token: null,
      };
    default:
      return state;
  }
};
