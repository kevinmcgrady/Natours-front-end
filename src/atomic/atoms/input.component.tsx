import React from "react";

interface IInputProps {
  name: string;
  type: "text" | "password" | "email";
  placeholder: string;
  required: boolean;
}

export const Input: React.FC<IInputProps> = ({
  name,
  type,
  placeholder,
  required
}) => {
  return (
    <input
      className="form__input"
      id={name}
      type={type}
      placeholder={placeholder}
      required={required}
    />
  );
};
