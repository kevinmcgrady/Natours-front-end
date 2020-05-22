import axios from 'axios';
import { push } from 'connected-react-router';
import Cookies from 'js-cookie';
import { combineEpics, Epic } from 'redux-observable';
import { concat, from, of } from 'rxjs';
// tslint:disable-next-line
import { catchError, switchMap, tap } from 'rxjs/operators';

import { getEnviromentUrl } from '../../urls/enviroment';
import urls from '../../urls/urls';
import {
  CreateUserFail,
  StoreError,
  StoreLoggedInUser,
  StoreToken,
} from '../actions/auth.actions';
import { AuthActionTypes } from '../types/auth.types';

const fetchTokenEpic: Epic<any, any, any, any> = (action$) =>
  action$.ofType(AuthActionTypes.FetchToken).pipe(
    switchMap((action) => {
      return from(
        axios.post(`${getEnviromentUrl()}/api/v1/users/login`, {
          email: action.payload.email,
          password: action.payload.password,
        }),
      ).pipe(
        switchMap((res) => {
          Cookies.set('jwt', res.data.token, { expires: 1 });
          return concat(
            of(StoreToken(res.data.token)),
            of(StoreLoggedInUser(res.data.data.user)),
            of(push(urls.account.settings)),
          );
        }),
        catchError((error) => of(StoreError(error.response.data.message))),
        tap(() => action.payload.loader.stop()),
      );
    }),
  );

const startCreateNewUser: Epic<any, any, any, any> = (action$) =>
  action$.ofType(AuthActionTypes.StartCreateNewUser).pipe(
    switchMap((action) => {
      console.log(action.payload);
      return from(
        axios.post(`${getEnviromentUrl()}/api/v1/users/signup`, {
          name: action.payload.user.name,
          email: action.payload.user.email,
          password: action.payload.user.password,
          passwordConfirm: action.payload.user.passwordConfirm,
        }),
      ).pipe(
        switchMap((res) => {
          Cookies.set('jwt', res.data.token, { expires: 1 });
          return concat(
            of(StoreToken(res.data.token)),
            of(StoreLoggedInUser(res.data.data.user)),
            of(push(urls.account.settings)),
          );
        }),
        catchError((error) => of(CreateUserFail(error.response.data.message))),
        tap(() => action.payload.loader.stop()),
      );
    }),
  );

const startForgotPassword: Epic<any, any, any, any> = (action$) =>
  action$.ofType(AuthActionTypes.StartForgotPassword).pipe(
    switchMap((action) => {
      return from(
        axios.post(`${getEnviromentUrl()}/api/v1/users/forgot-password`, {
          email: action.payload.email,
        }),
      ).pipe(
        switchMap((res) => {
          return of(push(urls.auth.successForgotPassword));
        }),
        catchError((error) => of(StoreError(error.response.data.message))),
        tap(() => action.payload.loader.stop()),
      );
    }),
  );

const startResetPassword: Epic<any, any, any, any> = (action$) =>
  action$.ofType(AuthActionTypes.StartResetPassword).pipe(
    switchMap((action) => {
      return from(
        axios.patch(
          `${getEnviromentUrl()}/api/v1/users/reset-password/${
            action.payload.token
          }`,
          {
            password: action.payload.newPassword,
            passwordConfirm: action.payload.newPasswordConfirm,
          },
        ),
      ).pipe(
        switchMap((res) => {
          Cookies.set('jwt', res.data.token, { expires: 1 });
          return concat(
            of(StoreToken(res.data.token)),
            of(StoreLoggedInUser(res.data.data.user)),
            of(push(urls.account.settings)),
          );
        }),
        catchError((error) => of(StoreError(error.response.data.message))),
        tap(() => action.payload.loader.stop()),
      );
    }),
  );

export default combineEpics(
  fetchTokenEpic,
  startCreateNewUser,
  startForgotPassword,
  startResetPassword,
);
