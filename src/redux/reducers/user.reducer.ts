import { UserActionTypes } from '../types/user.types';

export interface IUsersState {
  errorMessage: string | null;
  successMessage: string | null;
  isLoading: boolean;
}

const initialState: IUsersState = {
  errorMessage: null,
  successMessage: null,
  isLoading: false,
};

export const UsersReducer = (
  state: IUsersState = initialState,
  action: { type: string; payload?: any },
) => {
  switch (action.type) {
    case UserActionTypes.StartStoreUserDetails:
      return {
        ...state,
        isLoading: true,
        errorMessage: null,
        successMessage: null,
      };
    case UserActionTypes.StartUpdatePassword:
      return {
        ...state,
        isLoading: true,
        errorMessage: null,
        successMessage: null,
      };
    case UserActionTypes.SuccessStoreUserDetails:
      return {
        ...state,
        isLoading: false,
        errorMessage: null,
        successMessage: action.payload.message,
      };
    case UserActionTypes.FailStoreUserDetails:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload.message,
        successMessage: null,
      };
    default:
      return state;
  }
};
