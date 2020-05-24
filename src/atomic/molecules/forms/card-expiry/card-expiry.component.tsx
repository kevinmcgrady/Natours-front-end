import { CardExpiryElement } from '@stripe/react-stripe-js';
import React, { ChangeEventHandler, EventHandler } from 'react';

export interface ITextInputProps {
  id?: string;
  onChange?: ChangeEventHandler<any>;
  onFocus?: EventHandler<any>;
}

export const CardExpiry: React.FC<ITextInputProps> = ({
  id,
  onChange,
  onFocus,
}) => {
  const handleChange: ChangeEventHandler = (e) => {
    if (onChange) {
      onChange(e);
    }
  };

  const handleFocus: EventHandler<any> = (e) => {
    if (onFocus) {
      onFocus(e);
    }
  };

  return (
    <>
      <CardExpiryElement
        // @ts-ignore
        onChange={handleChange}
        // @ts-ignore
        onFocus={handleFocus}
        id={id}
        className='form__input'
      />
    </>
  );
};
