import React, { ReactNode } from "react";

interface IFormProps {
  submit: (
    values: { name: string; value: string }[] | { name: string; value: string }
  ) => void;
  name: string;
  children: ReactNode;
}

export const Form: React.FC<IFormProps> = ({ submit, name, children }) => {
  // Method to submit form
  const submitForm = (e: any) => {
    e.preventDefault();
    const form = document.getElementById(name);

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

  return (
    <form onSubmit={e => submitForm(e)} className="form" id={name}>
      {children}
    </form>
  );
};
