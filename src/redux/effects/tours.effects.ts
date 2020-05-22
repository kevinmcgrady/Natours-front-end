import axios from 'axios';
import { combineEpics, Epic, ofType } from 'redux-observable';
import { from, of } from 'rxjs';
// tslint:disable-next-line
import { catchError, map, mergeMap } from 'rxjs/operators';

import { getEnviromentUrl } from '../../urls/enviroment';
import { StoreSingleTour, StoreTours } from '../actions/tours.actions';
import { ToursActionTypes } from '../types/tours.types';

const fetchToursEpic: Epic<any, any, any, any> = (action$) =>
  action$.pipe(
    ofType(ToursActionTypes.FetchTours),
    mergeMap((action) =>
      from(
        axios.get(
          `${getEnviromentUrl()}/api/v1/tours${
            action.payload.queryString ? action.payload.queryString : ''
          }`,
        ),
      ).pipe(
        map((res) => StoreTours(res.data.data.data, res.data.data.totalPages)),
      ),
    ),
  );

const fetchTourEpic: Epic<any, any, any, any> = (action$) =>
  action$.pipe(
    ofType(ToursActionTypes.FetchSingleTour),
    mergeMap((action) =>
      from(
        axios.get(
          `${getEnviromentUrl()}/api/v1/tours/${action.payload.tourId}`,
        ),
      ).pipe(
        map((res) => StoreSingleTour(res.data.data.data)),
        catchError((error) => of(StoreSingleTour(null))),
      ),
    ),
  );

export default combineEpics(fetchToursEpic, fetchTourEpic);
