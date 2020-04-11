import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import WhiteLogo from '../assets/images/logo-white.png';
import { Icon } from '../atomic/atoms/icon/icon.component';
import { Map } from '../atomic/molecules/map/map.component';
import { ErrorTemplate } from '../atomic/templates/404/404.component';
import { formatDateWithDay } from '../core/formatters/date/formatters';
import ITour from '../models/tour.model';
import { FetchSingleTour } from '../redux/actions/tours.actions';
import { IAppState } from '../redux/reducers/main.reducer';
import {
  selectIsLoading,
  selectTour,
} from '../redux/selectors/tours.selectors';
import urls from '../urls/urls';

import LoadingPage from './loading.component';

interface ISingleTourProps {
  fetchTour: (tourId: string) => void;
  isLoading: boolean;
  tour: ITour;
  match?: any;
}

const SingleTour: React.FC<ISingleTourProps> = ({
  fetchTour,
  isLoading,
  tour,
  match,
}) => {
  useEffect(() => {
    const tourId = match.params.id;
    fetchTour(tourId);
  }, [fetchTour, match.params.id]);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (!isLoading && !tour) {
    return (
      <ErrorTemplate
        title="Tour not found"
        errorMessage="This tour was not found!"
        linkText="Back to tours"
        linkURL={urls.homepage}
      />
    );
  }

  return (
    <>
      <section className="section-header">
        <div className="header__hero">
          <div className="header__hero-overlay">&nbsp;</div>
          <img
            alt={tour.name}
            className="header__hero-img"
            src={`https://natours-kev.herokuapp.com/img/tours/${tour.imageCover}`}
          />
        </div>

        <div className="heading-box">
          <h1 className="heading-primary">
            <span>{tour.name}</span>
          </h1>
          <div className="heading-box__group">
            <div className="heading-box__detail">
              <Icon className="heading-box__icon" iconName="icon-clock" />
              <span className="heading-box__text">{tour.duration} days</span>
            </div>
            <div className="heading-box__detail">
              <Icon className="heading-box__icon" iconName="icon-map-pin" />
              <span className="heading-box__text">
                {tour.startLocation.description}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-description">
        <div className="overview-box">
          <div>
            <div className="overview-box__group">
              <h2 className="heading-secondary ma-bt-lg">Quick facts</h2>
              <div className="overview-box__detail">
                <Icon className="overview-box__icon" iconName="icon-calendar" />
                <span className="overview-box__label">Next Date</span>
                <span className="overview-box__text">
                  {formatDateWithDay(tour.startDates[0])}
                </span>
              </div>
              <div className="overview-box__detail">
                <Icon
                  className="overview-box__icon"
                  iconName="icon-trending-up"
                />
                <span className="overview-box__label">Difficulty</span>
                <span className="overview-box__text">{tour.difficulty}</span>
              </div>
              <div className="overview-box__detail">
                <Icon className="overview-box__icon" iconName="icon-user" />
                <span className="overview-box__label">Participants</span>
                <span className="overview-box__text">
                  {tour.maxGroupSize} peopls
                </span>
              </div>
              <div className="overview-box__detail">
                <Icon className="overview-box__icon" iconName="icon-star" />
                <span className="overview-box__label">Rating</span>
                <span className="overview-box__text">
                  {tour.ratingsAverage}/5
                </span>
              </div>
            </div>
            <div className="overview-box__group">
              <h2 className="heading-secondary ma-bt-lg">Your tour guides</h2>
              {tour.guides.map((guide) => (
                <div key={guide.name} className="overview-box__detail">
                  <img
                    alt={guide.name}
                    className="overview-box__img"
                    src={`https://natours-kev.herokuapp.com/img/users/${guide.photo}`}
                  />
                  <span className="overview-box__label">{guide.role}</span>
                  <span className="overview-box__text">{guide.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="description-box">
          <h2 className="heading-secondary ma-bt-lg">About {tour.name} tour</h2>
          {tour.description.split('\n').map((paragraph, index) => (
            <p key={index} className="description__text">
              {paragraph}
            </p>
          ))}
        </div>
      </section>
      <section className="section-pictures">
        {tour.images.map((image, index) => (
          <div key={index} className="picture-box">
            <img
              className="picture-box__img"
              src={`https://natours-kev.herokuapp.com/img/tours/${image}`}
              alt="tour"
            />
          </div>
        ))}
      </section>
      <Map locations={tour.locations} />
      <section className="section-reviews">
        <div className="reviews">
          {tour.reviews.map((review) => (
            <div key={review.id} className="reviews__card">
              <div className="reviews__avatar">
                <img
                  className="reviews__avatar-img"
                  src={`https://natours-kev.herokuapp.com/img/users/${review.user.photo}`}
                  alt={review.user.name}
                />
                {/* tslint:disable-next-line */}
                <h6 className="reviews__user">{review.user.name}</h6>
              </div>
              <p className="reviews__text">{review.review}</p>
              <div className="reviews__rating">
                {[1, 2, 3, 4, 5].map((star, index) => (
                  <Icon
                    key={index}
                    iconClassName={`reviews__star--${
                      review.rating >= star ? 'active' : 'inactive'
                    }`}
                    iconName="icon-star"
                    className="reviews__star"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="section-cta">
        <div className="cta">
          <div className="cta__img cta__img--logo">
            <img src={WhiteLogo} alt="Natours logo" />
          </div>
          <img
            className="cta__img cta__img--1"
            src={`https://natours-kev.herokuapp.com/img/tours/${tour.images[1]}`}
            alt={tour.name}
          />
          <img
            className="cta__img cta__img--2"
            src={`https://natours-kev.herokuapp.com/img/tours/${tour.images[2]}`}
            alt={tour.name}
          />
          <div className="cta__content">
            <h2 className="heading-secondary">What are you waiting for?</h2>
            <p className="cta__text">
              {tour.duration} days. 1 adventure. Infinite memories. Make it
              yours today!
            </p>
            <button className="btn btn--green span-all-rows" id="book-tour">
              Book tour now!
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  fetchTour: (tourId: string) => dispatch(FetchSingleTour(tourId)),
});

const mapStateToProps = createStructuredSelector<IAppState, {}>({
  isLoading: selectIsLoading,
  tour: selectTour,
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleTour);
