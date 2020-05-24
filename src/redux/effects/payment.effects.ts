import axios from 'axios';
import { combineEpics, Epic } from 'redux-observable';
import { concat, from, of } from 'rxjs';
// tslint:disable-next-line
import { catchError, switchMap, tap } from 'rxjs/operators';

import { getEnviromentUrl } from '../../urls/enviroment';
import { StartBooking } from '../actions/booking.actions';
import { FailStoreUserDetails } from '../actions/user.actions';
import {
  selectAuthToken,
  selectLoggedInUser,
} from '../selectors/auth.selectors';
import { PaymentActionTypes } from '../types/payment.types';

const startPayment: Epic<any, any, any, any> = (action$, state$) =>
  action$.ofType(PaymentActionTypes.StartPayment).pipe(
    switchMap((action) => {
      const token = selectAuthToken(state$.value);
      const user = selectLoggedInUser(state$.value);

      const headers = {
        headers: { Authorization: `Bearer ${token}` },
      };
      return from(
        axios.get(
          `${getEnviromentUrl()}/api/v1/bookings/create-payment/${
            action.payload.tourId
          }`,
          headers,
        ),
      ).pipe(
        switchMap((res) => {
          const paymentIntent = res.data.intent;
          return from(
            action.payload.stripe.confirmCardPayment(
              paymentIntent.client_secret,
              {
                payment_method: {
                  card: action.payload.card,
                  billing_details: {
                    name: action.payload.cardHolderName,
                    email: user?.email,
                  },
                },
              },
            ),
          ).pipe(
            switchMap((data: any) => {
              // payment failed due to wrong information.
              if (data.error) {
                return of(FailStoreUserDetails('Payment Failed!'));
              }
              return of(
                StartBooking(action.payload.tourId, paymentIntent.amount),
              );
            }),
            catchError((error) =>
              // payment failed to problem with Stripe
              concat(
                of(FailStoreUserDetails('There was a problem, try again')),
              ),
            ),
            tap(() => action.payload.loader.stop()),
          );
        }),
        catchError((error) =>
          concat(
            // payment failed with Natours payment server.
            of(FailStoreUserDetails('There was a problem, please try again')),
          ),
        ),
        tap(() => action.payload.loader.stop()),
      );
    }),
  );

export default combineEpics(startPayment);
