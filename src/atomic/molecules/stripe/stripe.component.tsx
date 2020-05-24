import {
  CardNumberElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import React from 'react';
import { connect } from 'react-redux';

import { required } from '../../../core/validators/form/validators';
import { StartPayment } from '../../../redux/actions/payment.actions';
import { CardCvc } from '../forms/card-cvc/card-cvc.component';
import { CardExpiry } from '../forms/card-expiry/card-expiry.component';
import { CardInput } from '../forms/card-input/card-input.component';
import { FormField } from '../forms/form-field/form-field';
import { Form } from '../forms/form/form';
import { SubmitButton } from '../forms/submit-button/submit-button';
import { TextInput } from '../forms/text-input/text-input';

interface IStripeContainerProps {
  tourId: string;
  makePayment: (
    card: any,
    stripe: any,
    cardHolderName: string,
    tourId: string,
    loader: any,
  ) => void;
}

const StripeContainer: React.FC<IStripeContainerProps> = ({
  makePayment,
  tourId,
}) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (cardHolderName: string, loader: any) => {
    if (!stripe || !elements || !cardHolderName) {
      return;
    }

    const card = elements.getElement(CardNumberElement);

    makePayment(card, stripe, cardHolderName, tourId, loader);
  };

  return (
    <Form
      name='booking-form'
      state={{ cardName: '', cardNumber: '', expiryNumber: '', cvc: '' }}
      onSubmit={(state, loader) => handleSubmit(state.cardName, loader)}
    >
      <FormField
        label='Name on card'
        name='cardName'
        validator={required('Please enter the full name on your card')}
      >
        <TextInput placeholder='Mr John Smith' />
      </FormField>

      <FormField
        label='Card number'
        name='cardNumber'
        validator={required('Please enter your card number')}
      >
        <CardInput />
      </FormField>

      <FormField
        label='Expiry number'
        name='expiryNumber'
        validator={required('Please enter your expiry number')}
      >
        <CardExpiry />
      </FormField>

      <FormField
        label='Cvc'
        name='cvc'
        validator={required('Please enter your cvc number')}
      >
        <CardCvc />
      </FormField>

      <SubmitButton>Buy now</SubmitButton>
    </Form>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  makePayment: (
    card: any,
    stripe: any,
    cardHolderName: string,
    tourId: string,
    loader: any,
  ) => dispatch(StartPayment(card, stripe, cardHolderName, tourId, loader)),
});

export default connect(null, mapDispatchToProps)(StripeContainer);
