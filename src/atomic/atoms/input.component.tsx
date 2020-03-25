import React, { useState } from "react";
import { validate } from "../../core/validators/form/helpers";
import { IValidators } from "../../core/validators/form/models";

interface IInputProps {
  validators?: IValidators[];
  name: string;
  type: "text" | "password" | "email";
  placeholder: string;
  required: boolean;
}

export const Input: React.FC<IInputProps> = ({
  validators = [],
  name,
  type,
  placeholder,
  required
}) => {
  const [message, setMessage] = useState([]);

  return (
    <>
      <input
        onChange={e => validate(e, validators, setMessage)}
        className={`form__input ${validators.length > 0 ? "form-error" : ""}`}
        id={name}
        type={type}
        placeholder={placeholder}
        required={required}
      />
      {message.map(message => (
        <p className="form__error-message">{message}</p>
      ))}
    </>
  );
};
