import { PaymentActionTypes } from '../types/payment.types';

export const StartPayment = (
  card: any,
  stripe: any,
  cardHolderName: string,
  tourId: string,
  loader: any,
) => ({
  type: PaymentActionTypes.StartPayment,
  payload: { card, stripe, cardHolderName, tourId, loader },
});
