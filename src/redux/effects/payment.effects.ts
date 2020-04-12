import axios from 'axios';
import { push } from 'connected-react-router';
import { combineEpics, Epic } from 'redux-observable';
import { concat, from, of } from 'rxjs';
// tslint:disable-next-line
import { catchError, switchMap } from 'rxjs/operators';

import urls from '../../urls/urls';
import {
  FailStoreUserDetails,
  SuccessStoreUserDetails,
} from '../actions/user.actions';
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
          `http://localhost:8000/api/v1/bookings/create-payment/${action.payload.tourId}`,
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
            switchMap((data) =>
              concat(
                of(SuccessStoreUserDetails('Payment successful!')),
                of(push(urls.account.bookings)),
              ),
            ),
            catchError((error) =>
              concat(
                of(FailStoreUserDetails('Payment failed!')),
                of(push(urls.account.bookings)),
              ),
            ),
          );
        }),
        catchError((error) =>
          concat(
            of(FailStoreUserDetails('There was a problem, please try again')),
            of(push(urls.account.bookings)),
          ),
        ),
      );
    }),
  );

export default combineEpics(startPayment);
