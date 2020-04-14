import { PaymentActionTypes } from '../types/payment.types';

export const StartPayment = (
  card: any,
  stripe: any,
  cardHolderName: string,
  tourId: string,
) => ({
  type: PaymentActionTypes.StartPayment,
  payload: { card, stripe, cardHolderName, tourId },
});
