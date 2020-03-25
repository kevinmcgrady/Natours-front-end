import React, { ReactNode, useState } from "react";

interface IFormProps {
  submit: (
    values: { name: string; value: string }[] | { name: string; value: string }
  ) => void;
  name: string;
  submitButtonText: string;
  children: ReactNode;
}

export const Form: React.FC<IFormProps> = ({
  submit,
  name,
  children,
  submitButtonText
}) => {
  const [isValid, setIsValid] = useState(false);

  // Method to submit form
  const submitForm = (e: any) => {
    const form = document.getElementById(name);
    e.preventDefault();
    if (form) {
      const inputs = Array.from(form.getElementsByTagName("input"));
      const values = inputs.map(input => {
        return {
          name: input.id,
          value: input.value
        };
      });
      submit(values);
    }
  };

  // Method to check validation.
  const changeHandler = (e: any) => {
    const form = document.getElementById(name);
    if (form) {
      const inputs = Array.from(form.getElementsByTagName("input"));

      inputs.forEach(input => {
        input.classList.contains("form-error") || input.value == ""
          ? setIsValid(false)
          : setIsValid(true);
      });
    }
  };

  return (
    <form
      onChange={e => changeHandler(e)}
      onSubmit={e => submitForm(e)}
      className="form"
      id={name}
    >
      {children}
      <button disabled={!isValid} className="btn btn--green">
        {submitButtonText}
      </button>
    </form>
  );
};
