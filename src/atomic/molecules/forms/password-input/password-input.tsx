import React, { ChangeEventHandler, EventHandler } from 'react';

export interface IPasswordInputProps {
  id?: string;
  disabled?: boolean;
  placeholder?: string;
  hasError?: boolean;
  required?: boolean;
  onChange?: ChangeEventHandler;
  onFocus?: EventHandler<any>;
}

export const PasswordInput: React.FC<IPasswordInputProps> = ({
  id,
  disabled,
  placeholder,
  hasError,
  required,
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
    <input
      aria-required={true}
      id={id}
      disabled={disabled}
      placeholder={placeholder}
      required={required}
      className={`form__input`}
      onChange={handleChange}
      onFocus={handleFocus}
      type='password'
    />
  );
};
