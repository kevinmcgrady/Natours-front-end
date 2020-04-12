import axios from 'axios';
import { combineEpics, Epic } from 'redux-observable';
import { from, of } from 'rxjs';
// tslint:disable-next-line
import { catchError, switchMap } from 'rxjs/operators';

import { config } from '../../config';
import { FailPayment } from '../actions/payment.actions';
import { selectAuthToken } from '../selectors/auth.selectors';
import { PaymentActionTypes } from '../types/payment.types';

// @ts-ignore
const stripe = window.Stripe(config.STRIPE_KEY);

const startPayment: Epic<any, any, any, any> = (action$, state$) =>
  action$.ofType(PaymentActionTypes.StartPayment).pipe(
    switchMap((action) => {
      const token = selectAuthToken(state$.value);

      const headers = {
        headers: { Authorization: `Bearer ${token}` },
      };
      return from(
        axios.get(
          `http://localhost:8000/api/v1/bookings/checkout-session/${action.payload.tourId}`,
          headers,
        ),
      ).pipe(
        switchMap((res) => {
          return of(
            stripe.redirectToCheckout({
              sessionId: res.data.session.id,
            }),
          );
        }),
        catchError((error) => of(FailPayment(error.response.data.message))),
      );
    }),
  );

export default combineEpics(startPayment);
