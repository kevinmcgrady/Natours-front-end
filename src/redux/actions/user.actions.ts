import { UserActionTypes } from '../types/user.types';

export const StartStoreUserDetails = (
  email: string,
  name: string,
  loader: any,
) => ({
  type: UserActionTypes.StartStoreUserDetails,
  payload: { email, name, loader },
});

export const SuccessStoreUserDetails = (message: string) => ({
  type: UserActionTypes.SuccessStoreUserDetails,
  payload: { message },
});

export const FailStoreUserDetails = (message: string) => ({
  type: UserActionTypes.FailStoreUserDetails,
  payload: { message },
});

export const StartUpdatePassword = (
  currentPassword: string,
  newPassword: string,
  passwordConfirm: string,
  loader: any,
) => ({
  type: UserActionTypes.StartUpdatePassword,
  payload: { currentPassword, newPassword, passwordConfirm, loader },
});
