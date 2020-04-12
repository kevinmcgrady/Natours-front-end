import { PaymentActionTypes } from '../types/payment.types';

export interface IPaymentState {
  successMessage: string | null;
  errorMessage: string | null;
}

const initialState: IPaymentState = {
  successMessage: null,
  errorMessage: null,
};

export const PaymentReducer = (
  state: IPaymentState = initialState,
  action: { type: string; payload?: any },
) => {
  switch (action.type) {
    case PaymentActionTypes.StartPayment:
      return {
        ...state,
        errorMessage: null,
        successMessage: null,
      };
    case PaymentActionTypes.SuccessPayment:
      return {
        ...state,
        errorMessage: null,
        successMessage: action.payload.message,
      };
    case PaymentActionTypes.FailPayment:
      return {
        ...state,
        successMessage: null,
        errorMessage: action.payload.message,
      };
    default:
      return state;
  }
};
