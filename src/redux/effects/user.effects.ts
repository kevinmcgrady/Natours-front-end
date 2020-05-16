import axios from 'axios';
import Cookies from 'js-cookie';
import { combineEpics, Epic } from 'redux-observable';
import { concat, from, of } from 'rxjs';
// tslint:disable-next-line
import { catchError, switchMap, tap } from 'rxjs/operators';

import { getEnviromentUrl } from '../../urls/enviroment';
import { StoreLoggedInUser, StoreToken } from '../actions/auth.actions';
import {
  FailStoreUserDetails,
  SuccessStoreUserDetails,
} from '../actions/user.actions';
import { selectAuthToken } from '../selectors/auth.selectors';
import { UserActionTypes } from '../types/user.types';

const startCreateNewUser: Epic<any, any, any, any> = (action$, state$) =>
  action$.ofType(UserActionTypes.StartStoreUserDetails).pipe(
    switchMap((action) => {
      const token = selectAuthToken(state$.value);

      const headers = {
        headers: { Authorization: `Bearer ${token}` },
      };
      return from(
        axios.patch(
          `${getEnviromentUrl()}/api/v1/users/update-me`,
          {
            name: action.payload.name,
            email: action.payload.email,
          },
          headers,
        ),
      ).pipe(
        switchMap((res) => {
          return concat(
            of(StoreLoggedInUser(res.data.data.user)),
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

const startUpdatePassword: Epic<any, any, any, any> = (action$, state$) =>
  action$.ofType(UserActionTypes.StartUpdatePassword).pipe(
    switchMap((action) => {
      const token = selectAuthToken(state$.value);

      const headers = {
        headers: { Authorization: `Bearer ${token}` },
      };
      return from(
        axios.patch(
          `${getEnviromentUrl()}/api/v1/users/update-password`,
          {
            passwordConfirm: action.payload.passwordConfirm,
            password: action.payload.newPassword,
            passwordCurrent: action.payload.currentPassword,
          },
          headers,
        ),
      ).pipe(
        switchMap((res) => {
          Cookies.set('jwt', res.data.token, { expires: 1 });
          return concat(
            of(StoreLoggedInUser(res.data.data.user)),
            of(StoreToken(res.data.token)),
            of(SuccessStoreUserDetails('Updated Password!')),
          );
        }),
        catchError((error) =>
          of(FailStoreUserDetails(error.response.data.message)),
        ),
        tap(() => action.payload.loader.stop()),
      );
    }),
  );

export default combineEpics(startCreateNewUser, startUpdatePassword);
