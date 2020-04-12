import React from 'react';

import ITour from '../../../models/tour.model';
import StripeContainer from '../stripe/stripe.component';

interface ICheckoutProps {
  tour: ITour;
}

export const Checkout: React.FC<ICheckoutProps> = ({ tour }) => {
  return (
    <div className='card card-checkout'>
      <div className='card__header'>
        <div className='card__picture'>
          <div className='card__picture-overlay'>&nbsp;</div>
          <img
            src={`http://localhost:8000/img/tours/${tour.imageCover}`}
            alt={tour.name}
            className='card__picture-img'
          />
        </div>
        <h3 className='heading-tertirary'>
          <span>{tour.name}</span>
          <br />
          <span>price: £{tour.price}</span>
        </h3>
      </div>
      <div className='stripe-container'>
        <StripeContainer tourId={tour.id} />
      </div>
    </div>
  );
};
