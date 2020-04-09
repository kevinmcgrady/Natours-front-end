interface IStartLocation {
  type: string;
  coordinates: number[];
  description: string;
  address: string;
}

interface IGuide {
  role: string;
  photo: string;
  _id: string;
  name: string;
  email: string;
  id: string;
}

export interface ILocation {
  type: string;
  coordinates: number[];
  _id: string;
  description: string;
  day: number;
}

interface IReviewUser {
  photo: string;
  _id: string;
  name: string;
  id: string;
}

interface IReview {
  createdAt: string;
  _id: string;
  review: string;
  rating: number;
  user: IReviewUser;
  tour: string;
  id: string;
}

interface ITour {
  startLocation: IStartLocation;
  ratingsAverage: number;
  ratingsQuantity: number;
  images: string[];
  startDates: string[];
  secretTour: boolean;
  guides: IGuide[];
  _id: string;
  name: string;
  duration: number;
  maxGroupSize: number;
  difficulty: string;
  price: number;
  summary: string;
  description: string;
  imageCover: string;
  locations: ILocation[];
  slug: string;
  durationWeeks: number;
  id: string;
  reviews: IReview[];
}

export default ITour;
