import React, { ReactNode } from 'react';
import { MixedSchema } from 'yup';

import { CardCvc } from '../card-cvc/card-cvc.component';
import { CardExpiry } from '../card-expiry/card-expiry.component';
import { CardInput } from '../card-input/card-input.component';
import { Label } from '../form-label/label.component';
import { PasswordInput } from '../password-input/password-input';
import { SubmitButton } from '../submit-button/submit-button';
import { TextInput } from '../text-input/text-input';

export interface IFormFieldProps {
  name: string;
  label?: string;
  validator?: MixedSchema;
  errorMessage?: string;
  children: ReactNode;
  hasError?: boolean;
  value?: string;
  onChange?: (value: string, aditionalError?: string) => void;
  onFocus?: () => void;
}

export const FormField: React.FC<IFormFieldProps> = ({
  children,
  label,
  onChange,
  onFocus,
  errorMessage,
  hasError,
  value,
}) => {
  // Method to render children.
  const renderChildren = (formChildren: any) => {
    return React.Children.map(formChildren, (child) => {
      if (child.type === TextInput) {
        return React.cloneElement(child, {
          ...child.props,
          value,
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
          value,
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

      if (child.type === CardInput) {
        return React.cloneElement(child, {
          ...child.props,
          value,
          onFocus: () => {
            if (onFocus) {
              onFocus();
            }
          },
          onChange: (event: any) => {
            if (onChange) {
              onChange(
                `${event.empty ? '' : 'has-value'}`,
                event.error?.message,
              );
            }
          },
        });
      }

      if (child.type === CardExpiry) {
        return React.cloneElement(child, {
          ...child.props,
          value,
          onFocus: () => {
            if (onFocus) {
              onFocus();
            }
          },
          onChange: (event: any) => {
            if (onChange) {
              onChange(
                `${event.empty ? '' : 'has-value'}`,
                event.error?.message,
              );
            }
          },
        });
      }

      if (child.type === CardCvc) {
        return React.cloneElement(child, {
          ...child.props,
          value,
          onFocus: () => {
            if (onFocus) {
              onFocus();
            }
          },
          onChange: (event: any) => {
            if (onChange) {
              onChange(
                `${event.empty ? '' : 'has-value'}`,
                event.error?.message,
              );
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
    <div className={`form__group ${hasError ? 'form-error' : ''}`}>
      <Label>{label}</Label>
      {renderChildren(children)}
      {errorMessage && <p className='form__error-message'>{errorMessage}</p>}
    </div>
  );
};
