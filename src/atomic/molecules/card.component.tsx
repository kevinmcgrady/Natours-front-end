import React from "react";
import { Icon } from "../atoms/icon.component";

interface ICardProps {}

export const Card: React.FC<ICardProps> = () => {
  return (
    <div className="card">
      <div className="card__header">
        <div className="card__picture">
          <div className="card__picture-overlay">&nbsp;</div>
          <img className="card__picture-img" />
        </div>
        <h3 className="heading-tertirary">
          <span>The Walking Dog</span>
        </h3>
      </div>
      <div className="card__details">
        <h4 className="card__sub-heading">Difficult 10-day tour</h4>
        <p className="card__text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quidem
          totam accusamus odio.
        </p>
        <div className="card__data">
          <Icon iconName="icon-map-pin" />
          <span>Miami, USA</span>
        </div>
        <div className="card__data">
          <Icon iconName="icon-map-pin" />
          <span>June 2021</span>
        </div>
        <div className="card__data">
          <Icon iconName="icon-map-pin" />
          <span>4 stops</span>
        </div>
        <div className="card__data">
          <Icon iconName="icon-map-pin" />
          <span>15 people</span>
        </div>
      </div>
      <div className="card__footer">
        <p>
          <span className="card__footer-value">$200 </span>
          <span className="card__footer-text">per person</span>
        </p>
        <p className="card__ratings">
          <span className="card__footer-value">5 </span>
          <span className="card__footer-text">ratings (6)</span>
        </p>
        <a className="btn btn--green btn--small">Details</a>
      </div>
    </div>
  );
};
