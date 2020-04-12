import axios from 'axios';
import { combineEpics, Epic } from 'redux-observable';
import { concat, from, of } from 'rxjs';
// tslint:disable-next-line
import { catchError, switchMap, tap } from 'rxjs/operators';

import { StoreLoggedInUser } from '../actions/auth.actions';
import {
  FailStoreUserDetails,
  SuccessStoreUserDetails,
} from '../actions/user.actions';
import { selectAuthToken, selectUserId } from '../selectors/auth.selectors';
import { UserActionTypes } from '../types/user.types';

const startCreateNewUser: Epic<any, any, any, any> = (action$, state$) =>
  action$.ofType(UserActionTypes.StartStoreUserDetails).pipe(
    switchMap((action) => {
      const userId = selectUserId(state$.value);
      const token = selectAuthToken(state$.value);

      const headers = {
        headers: { Authorization: `Bearer ${token}` },
      };
      return from(
        axios.patch(
          `https://natours-kev.herokuapp.com/api/v1/users/${userId}`,
          {
            name: action.payload.name,
            email: action.payload.email,
          },
          headers,
        ),
      ).pipe(
        switchMap((res) => {
          return concat(
            of(StoreLoggedInUser(res.data.data.data)),
            of(SuccessStoreUserDetails('Updated Details!')),
          );
        }),
        catchError((error) =>
          of(FailStoreUserDetails(error.response.data.message)),
        ),
        tap(() => action.payload.loader.stop()),
      );
    }),
  );

export default combineEpics(startCreateNewUser);
