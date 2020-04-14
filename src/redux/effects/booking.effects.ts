import axios from 'axios';
import { push } from 'connected-react-router';
import { combineEpics, Epic } from 'redux-observable';
import { from, of } from 'rxjs';
// tslint:disable-next-line
import { catchError, switchMap } from 'rxjs/operators';

import urls from '../../urls/urls';
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
          `http://localhost:8000/api/v1/bookings/create-booking-checkout`,
          {
            tour: action.payload.tourId,
            price: action.payload.price,
          },
          headers,
        ),
      ).pipe(
        switchMap((res) => {
          return of(push(urls.account.bookings));
        }),
        catchError((error) => of(console.log(error.response))),
      );
    }),
  );

export default combineEpics(startBooking);
