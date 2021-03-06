import React, { ChangeEventHandler, EventHandler } from 'react';

export interface ITextInputProps {
  id?: string;
  disabled?: boolean;
  placeholder?: string;
  hasError?: boolean;
  required?: boolean;
  onChange?: ChangeEventHandler;
  onFocus?: EventHandler<any>;
  value?: string;
}

export const TextInput: React.FC<ITextInputProps> = ({
  id,
  disabled,
  placeholder,
  required,
  onChange,
  onFocus,
  value,
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
      <input
        aria-required={true}
        onChange={handleChange}
        onFocus={handleFocus}
        id={id}
        disabled={disabled}
        placeholder={placeholder}
        required={required}
        className={`form__input`}
        value={value}
      />
    </>
  );
};
