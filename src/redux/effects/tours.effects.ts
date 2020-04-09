import { Epic, ofType, combineEpics } from "redux-observable";
import { StoreTours, StoreSingleTour } from "../actions/tours.actions";
import { mergeMap, map, catchError } from "rxjs/operators";
import { from, of } from "rxjs";
import axios from "axios";
import { ToursActionTypes } from "../types/tours.types";

const fetchToursEpic: Epic<any, any, any, any> = (action$) =>
  action$.pipe(
    ofType(ToursActionTypes.FetchTours),
    mergeMap((action) =>
      from(axios.get("https://natours-kev.herokuapp.com/api/v1/tours")).pipe(
        map((res) => StoreTours(res.data.data.data))
      )
    )
  );

const fetchTourEpic: Epic<any, any, any, any> = (action$) =>
  action$.pipe(
    ofType(ToursActionTypes.FetchSingleTour),
    mergeMap((action) =>
      from(
        axios.get(
          `https://natours-kev.herokuapp.com/api/v1/tours/${action.payload.tourId}`
        )
      ).pipe(
        map((res) => StoreSingleTour(res.data.data.data)),
        catchError((error) => of(StoreSingleTour(null)))
      )
    )
  );

export default combineEpics(fetchToursEpic, fetchTourEpic);
