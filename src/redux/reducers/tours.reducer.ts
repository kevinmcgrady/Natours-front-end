import ITour from '../../models/tour.model';
import { ToursActionTypes } from '../types/tours.types';

export interface IToursState {
  tours: ITour[];
  isLoading: boolean;
  numberOfPages: number;
  tour: ITour | null;
}

const initialState: IToursState = {
  tours: [],
  isLoading: false,
  tour: null,
  numberOfPages: 0,
};

export const ToursReducer = (
  state: IToursState = initialState,
  action: { type: string; payload?: any },
) => {
  switch (action.type) {
    case ToursActionTypes.FetchTours:
      return {
        ...state,
        isLoading: true,
        tours: [],
      };
    case ToursActionTypes.StoreTours:
      return {
        ...state,
        isLoading: false,
        tours: action.payload.tours,
        numberOfPages: action.payload.numberOfPages,
      };
    case ToursActionTypes.FetchSingleTour:
      return {
        ...state,
        isLoading: true,
      };
    case ToursActionTypes.StoreSingleTour:
      return {
        ...state,
        isLoading: false,
        tour: action.payload.tour,
      };
    default:
      return state;
  }
};
