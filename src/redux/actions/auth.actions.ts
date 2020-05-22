import { IUser, IUserForSubmission } from '../../models/user.model';
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

export const StoreLoggedInUser = (user: IUser) => ({
  type: AuthActionTypes.StoreLogedInUser,
  payload: { user },
});

export const StartCreateNewUser = (user: IUserForSubmission, loader: any) => ({
  type: AuthActionTypes.StartCreateNewUser,
  payload: { user, loader },
});

export const CreateUserFail = (message: string) => ({
  type: AuthActionTypes.CreateNewUserFail,
  payload: { message },
});

export const StartForgotPassword = (email: string, loader: any) => ({
  type: AuthActionTypes.StartForgotPassword,
  payload: { email, loader },
});

export const StartResetPassword = (
  newPassword: string,
  newPasswordConfirm: string,
  token: string,
  loader: any,
) => ({
  type: AuthActionTypes.StartResetPassword,
  payload: { newPassword, newPasswordConfirm, loader, token },
});

export const Logout = () => ({
  type: AuthActionTypes.Logout,
});
