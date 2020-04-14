import { combineEpics } from 'redux-observable';

import authEpics from '../effects/auth.effects';
import bookingEpics from '../effects/booking.effects';
import paymentEpics from '../effects/payment.effects';
import toursEpics from '../effects/tours.effects';
import userEpics from '../effects/user.effects';

export const rootEpic = combineEpics(
  authEpics,
  toursEpics,
  userEpics,
  paymentEpics,
  bookingEpics,
);
