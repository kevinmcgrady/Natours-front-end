import { BookingActionTypes } from '../types/booking.types';

export const StartBooking = (tourId: string, price: number) => ({
  type: BookingActionTypes.StartBooking,
  payload: { tourId, price },
});
