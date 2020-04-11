import { AuthActionTypes } from '../types/auth.types';

export const FetchToken = (email: string, password: string, loader: any) => ({
  type: AuthActionTypes.FetchToken,
  payload: { email, password, loader },
});

export const StoreToken = (token: string) => ({
  type: AuthActionTypes.StoreToken,
  payload: { token },
});

export const StoreError = (errorMessage: string) => ({
  type: AuthActionTypes.StoreError,
  payload: { errorMessage },
});
