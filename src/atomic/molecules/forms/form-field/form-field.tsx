import React, { ReactNode } from "react";
import { Label } from "../form-label/label.component";
import { MixedSchema } from "yup";
import { TextInput } from "../text-input/text-input";
import { PasswordInput } from "../password-input/password-input";
import { SubmitButton } from "../submit-button/submit-button";

export interface IFormFieldProps {
  name: string;
  label?: string;
  validator?: MixedSchema;
  errorMessage?: string;
  children: ReactNode;
  hasError?: boolean;
  onChange?: (value: string) => void;
  onFocus?: () => void;
}

export const FormField: React.FC<IFormFieldProps> = ({
  children,
  label,
  onChange,
  onFocus,
  errorMessage,
  hasError,
}) => {
  // Method to render children.
  const renderChildren = (children: any) => {
    return React.Children.map(children, (child) => {
      if (child.type === TextInput) {
        return React.cloneElement(child, {
          ...child.props,
          onFocus: () => {
            if (onFocus) {
              onFocus();
            }
          },
          onChange: (event: any) => {
            if (onChange) {
              onChange(event.target.value);
            }
          },
        });
      }

      if (child.type === PasswordInput) {
        return React.cloneElement(child, {
          ...child.props,
          onFocus: () => {
            if (onFocus) {
              onFocus();
            }
          },
          onChange: (event: any) => {
            if (onChange) {
              onChange(event.target.value);
            }
          },
        });
      }

      if (child.type === SubmitButton) {
        return React.cloneElement(child, {
          ...child.props,
        });
      }
    });
  };

  return (
    <div className={`form__group ${hasError ? "form-error" : ""}`}>
      <Label>{label}</Label>
      {renderChildren(children)}
      {errorMessage && <p className="form__error-message">{errorMessage}</p>}
    </div>
  );
};
