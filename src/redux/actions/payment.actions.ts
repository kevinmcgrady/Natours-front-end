import { PaymentActionTypes } from '../types/payment.types';

export const StartPayment = (tourId: string) => ({
  type: PaymentActionTypes.StartPayment,
  payload: { tourId },
});

export const SuccessPayment = (message: string) => ({
  type: PaymentActionTypes.SuccessPayment,
  payload: { message },
});

export const FailPayment = (message: string) => ({
  type: PaymentActionTypes.FailPayment,
  payload: { message },
});
