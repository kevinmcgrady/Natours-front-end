import axios from 'axios';
import { push } from 'connected-react-router';
import { combineEpics, Epic } from 'redux-observable';
import { concat, from, of } from 'rxjs';
// tslint:disable-next-line
import { catchError, switchMap } from 'rxjs/operators';

import { getEnviromentUrl } from '../../urls/enviroment';
import urls from '../../urls/urls';
import {
  FailStoreUserDetails,
  SuccessStoreUserDetails,
} from '../actions/user.actions';
import { selectAuthToken } from '../selectors/auth.selectors';
import { BookingActionTypes } from '../types/booking.types';

const startBooking: Epic<any, any, any, any> = (action$, state$) =>
  action$.ofType(BookingActionTypes.StartBooking).pipe(
    switchMap((action) => {
      const token = selectAuthToken(state$.value);

      const headers = {
        headers: { Authorization: `Bearer ${token}` },
      };
      return from(
        axios.post(
          `${getEnviromentUrl()}/api/v1/bookings/create-booking-checkout`,
          {
            tour: action.payload.tourId,
            price: action.payload.price,
          },
          headers,
        ),
      ).pipe(
        switchMap((res) => {
          return concat(
            of(SuccessStoreUserDetails('Booking completed')),
            of(push(urls.account.bookings)),
          );
        }),
        catchError((error) =>
          concat(
            of(FailStoreUserDetails('Booking Failed, please contact Natours')),
            of(push(urls.account.bookings)),
          ),
        ),
      );
    }),
  );

export default combineEpics(startBooking);
