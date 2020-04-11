import { ToursActionTypes } from '../types/tours.types';

export const FetchTours = () => ({
  type: ToursActionTypes.FetchTours,
});

export const StoreTours = (tours: any) => ({
  type: ToursActionTypes.StoreTours,
  payload: { tours },
});

export const FetchSingleTour = (tourId: string) => ({
  type: ToursActionTypes.FetchSingleTour,
  payload: { tourId },
});

export const StoreSingleTour = (tour: any) => ({
  type: ToursActionTypes.StoreSingleTour,
  payload: { tour },
});
