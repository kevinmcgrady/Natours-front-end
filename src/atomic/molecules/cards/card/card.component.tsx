import React from "react";
import { Icon } from "../../../atoms/icon/icon.component";
import { Link } from "react-router-dom";
import { formatDate } from "../../../../core/formatters/date/formatters";
import ITour from "../../../../models/tour.model";

interface ICardProps {
  tour: ITour;
}

export const Card: React.FC<ICardProps> = ({ tour }) => {
  return (
    <div className="card">
      <div className="card__header">
        <div className="card__picture">
          <div className="card__picture-overlay">&nbsp;</div>
          <img
            className="card__picture-img"
            src={`https://natours-kev.herokuapp.com/img/tours/${tour.imageCover}`}
          />
        </div>
        <h3 className="heading-tertirary">
          <span>{tour.name}</span>
        </h3>
      </div>
      <div className="card__details">
        <h4 className="card__sub-heading">
          {tour.difficulty} {tour.duration}-day tour
        </h4>
        <p className="card__text">{tour.summary}</p>
        <div className="card__data">
          <Icon iconName="icon-map-pin" />
          <span>{tour.startLocation.description}</span>
        </div>
        <div className="card__data">
          <Icon iconName="icon-map-pin" />
          <span>{formatDate(tour.startDates[0])}</span>
        </div>
        <div className="card__data">
          <Icon iconName="icon-map-pin" />
          <span>{tour.locations.length} stops</span>
        </div>
        <div className="card__data">
          <Icon iconName="icon-map-pin" />
          <span>{tour.maxGroupSize} people</span>
        </div>
      </div>
      <div className="card__footer">
        <p>
          <span className="card__footer-value">${tour.price} </span>
          <span className="card__footer-text">per person</span>
        </p>
        <p className="card__ratings">
          <span className="card__footer-value">{tour.ratingsAverage} </span>
          <span className="card__footer-text">
            ratings ({tour.ratingsQuantity})
          </span>
        </p>
        <Link className="btn btn--green btn--small" to={`/tour/${tour.id}`}>
          Details
        </Link>
      </div>
    </div>
  );
};
