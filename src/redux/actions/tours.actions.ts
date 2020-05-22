import { ToursActionTypes } from '../types/tours.types';

export const FetchTours = (queryString: string) => ({
  type: ToursActionTypes.FetchTours,
  payload: { queryString },
});

export const StoreTours = (tours: any, numberOfPages: number) => ({
  type: ToursActionTypes.StoreTours,
  payload: { tours, numberOfPages },
});

export const FetchSingleTour = (tourId: string) => ({
  type: ToursActionTypes.FetchSingleTour,
  payload: { tourId },
});

export const StoreSingleTour = (tour: any) => ({
  type: ToursActionTypes.StoreSingleTour,
  payload: { tour },
});
