import axios from 'axios';
import { push } from 'connected-react-router';
import { combineEpics, Epic } from 'redux-observable';
import { concat, from, of } from 'rxjs';
// tslint:disable-next-line
import { catchError, switchMap, tap } from 'rxjs/operators';

import urls from '../../urls/urls';
import {
  StoreError,
  StoreLoggedInUser,
  StoreToken,
} from '../actions/auth.actions';
import { AuthActionTypes } from '../types/auth.types';

const fetchTokenEpic: Epic<any, any, any, any> = (action$) =>
  action$.ofType(AuthActionTypes.FetchToken).pipe(
    switchMap((action) => {
      return from(
        axios.post(`https://natours-kev.herokuapp.com/api/v1/users/login`, {
          email: action.payload.email,
          password: action.payload.password,
        }),
      ).pipe(
        switchMap((res) => {
          return concat(
            of(StoreToken(res.data.token)),
            of(StoreLoggedInUser(res.data.data.user)),
            of(push(urls.account.settings)),
          );
        }),
        catchError(() => of(StoreError('Incorrect email or password'))),
        tap(() => action.payload.loader.stop()),
      );
    }),
  );

export default combineEpics(fetchTokenEpic);
