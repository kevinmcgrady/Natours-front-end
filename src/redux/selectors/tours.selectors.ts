import { createSelector } from "reselect";
import { IAppState } from "../reducers/main.reducer";

const toursState = (state: IAppState) => state.tours;

export const selectIsLoading = createSelector(
  [toursState],
  (tour) => tour.isLoading
);

export const selectTours = createSelector([toursState], (tours) => tours.tours);

export const selectTour = createSelector([toursState], (tour) => tour.tour);
