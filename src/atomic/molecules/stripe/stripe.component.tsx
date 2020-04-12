import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import React from 'react';
import { connect } from 'react-redux';

import { StartPayment } from '../../../redux/actions/payment.actions';

interface IStripeContainerProps {
  tourId: string;
  makePayment: (
    card: any,
    stripe: any,
    cardHolderName: string,
    tourId: string,
  ) => void;
}

const StripeContainer: React.FC<IStripeContainerProps> = ({
  makePayment,
  tourId,
}) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const cardHolderName = document.getElementById('cardHolder');

    if (!stripe || !elements || !cardHolderName) {
      return;
    }
    const card = elements.getElement(CardNumberElement);

    makePayment(card, stripe, 'Mr Kevin McGrady', tourId);
  };

  return (
    <form name='booking-form' onSubmit={handleSubmit}>
      <div className='form__group'>
        <label htmlFor='name' className='form__label'>
          Name on card
        </label>
        <input
          aria-required={true}
          type='text'
          placeholder='Mr John Smith'
          className='form__input'
          name='name'
          id='cardHolder'
        />
      </div>
      <div className='form__group'>
        <label htmlFor='name' className='form__label'>
          Card number
        </label>
        <CardNumberElement className='form__input' />
      </div>
      <div className='form__group'>
        <label htmlFor='name' className='form__label'>
          Expiry number
        </label>
        <CardExpiryElement className='form__input' />
      </div>
      <div className='form__group'>
        <label htmlFor='name' className='form__label'>
          Cvc
        </label>
        <CardCvcElement className='form__input' />
      </div>
      <button disabled={!stripe} className='btn btn--green'>
        Buy now
      </button>
    </form>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  makePayment: (
    card: any,
    stripe: any,
    cardHolderName: string,
    tourId: string,
  ) => dispatch(StartPayment(card, stripe, cardHolderName, tourId)),
});

export default connect(null, mapDispatchToProps)(StripeContainer);
