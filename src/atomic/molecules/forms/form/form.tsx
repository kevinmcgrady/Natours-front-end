import { fromPairs, mapValues } from 'lodash';
import React, { Component, FormEvent, ReactElement, ReactNode } from 'react';
import { MixedSchema, object, ValidationError } from 'yup';

import { FormLoader } from '../../../../core/validators/form/form-loader';
import { FormField, IFormFieldProps } from '../form-field/form-field';
import { SubmitButton } from '../submit-button/submit-button';

// Form props.
export interface IFormProps<T> {
  name: string;
  state: T;
  onSubmit: (state: T, loader: any) => void;
  children: ReactElement[];
}

// Form field props.
export type FormFieldState = {
  value: any | any[];
  touched: boolean;
  error: string;
};

// Form state.
type FormState = { [formField: string]: FormFieldState };

// Form state.
interface IFormState {
  form: FormState;
  isLoading: boolean;
  isValid: boolean;
}

// Form field errors.
type FieldErrors = { [key: string]: string };

// Main Form Class.
export class Form<T extends object> extends Component<
  IFormProps<T>,
  IFormState
> {
  // Initial state.
  public state: IFormState = {
    form: {},
    isLoading: false,
    isValid: false,
  };

  // Form loader.
  private loader!: FormLoader;

  // Validation schema.
  private schema!: MixedSchema;

  // Array for form fields.
  private formFieldComponents!: Array<ReactElement<IFormFieldProps>>;

  // Validation number.
  private deferredValidation!: number;

  // Before component mounts.
  public componentWillMount() {
    this.buildSchema();

    this.loader = new FormLoader((isLoading: boolean) => {
      this.setState({ isLoading });
    });

    this.setupState();
  }

  // When component updates.
  public componentDidUpdate(prevChildren: IFormProps<T>) {
    if (this.props.children !== prevChildren.children) {
      this.buildSchema();
    }
  }

  // Method to render form component.
  public render() {
    const { name, children } = this.props;
    return (
      <form onSubmit={this.onSubmitHandler} name={name}>
        {this.cloneChildren(children)}
      </form>
    );
  }

  // Method to set up state.
  private setupState() {
    const { state } = this.props;
    console.log(state);
    const form: FormState = mapValues(state, (initValue: any) => ({
      value: initValue,
      touched: false,
      error: '',
    }));

    this.setState({ form });
  }

  // Method to build schema.
  private buildSchema() {
    const { children } = this.props;

    this.formFieldComponents = children.map((child) => child);

    const validators = fromPairs(
      this.formFieldComponents
        .filter((field) => field.props.validator)
        .map((field) => [field.props.name, field.props.validator]),
    ) as any;

    this.schema = object(validators);
  }

  // Method to get form values.
  private getFormValues() {
    const values = mapValues(
      this.state.form,
      (field: FormFieldState) => field.value,
    );
    return values;
  }

  // Method to get form field values.
  private getFormFieldValue(field: string) {
    const value = this.state.form[field].value;
    return value;
  }

  // Method to set form field values.
  private setFormFieldValue(field: string, value: any) {
    if (this.state.form[field] === null) {
      return;
    }
    this.setState({
      form: {
        ...this.state.form,
        [field]: {
          ...this.state.form[field],
          value,
        },
      },
    });
  }

  // Method to get form field errors.
  private getFormFieldError(field: string): any {
    // @ts-ignore
    if (this.state.form[field] && this.state.form[field].touched) {
      return this.state.form[field].error;
    }
    return;
  }

  private hasError(field: string): any {
    if (this.state.form[field].error && this.state.form[field].touched) {
      return true;
    }
    return false;
  }

  // Metho to set form field errors.
  private setFormFieldErrors(errors: FieldErrors) {
    const form = { ...this.state.form };

    Object.keys(form).forEach((key) => {
      form[key] = {
        ...this.state.form[key],
        error: errors[key] || '',
      };
    });

    this.setState({ form });
  }

  // Method to clear field errors.
  private clearFormFieldErrors() {
    this.setFormFieldErrors({});
  }

  // Mehod to validate form.
  private async validateForm(
    state: any,
    isSubmit: boolean = false,
    fieldName?: string,
  ) {
    try {
      await this.schema.validate(state, { abortEarly: false });
      this.clearFormFieldErrors();
      this.setState({ isValid: true });
    } catch (error) {
      this.clearFormFieldErrors();

      const fieldErrors: FieldErrors = {};

      if (fieldName) {
        error.inner.forEach((error: ValidationError) => {
          fieldErrors[error.path] = error.message;
        });

        this.setFormFieldErrors(fieldErrors);
        this.setState({ isValid: false });
        return false;
      }
      return true;
    }
  }

  // On Change Handler.
  private onChangeHandler = (field: string, shouldValidate = true) => {
    return (value: any) => {
      if (this.state.form[field] === null) {
        return;
      }

      this.setFormFieldValue(field, value);

      const state = {
        ...this.getFormValues(),
        [field]: value,
      };

      window.clearTimeout(this.deferredValidation);
      if (shouldValidate) {
        this.deferredValidation = window.setTimeout(
          () => this.validateForm(state, false, field),
          0,
        );
      }
    };
  }

  // On Submit Handler.
  private onSubmitHandler = async (event: FormEvent) => {
    event.preventDefault();

    if (this.state.isLoading) {
      return false;
    }

    const state = this.getFormValues();

    try {
      await this.validateForm(state, true);
      this.loader.start();
      this.props.onSubmit(state as T, this.loader);
    } catch (error) {
      this.loader.stop();
      this.props.onSubmit(state as T, this.loader);
    }
  }

  // Method to handle on focus.
  private onFocusHandler = (field: string) => {
    return () => {
      this.setState({
        form: {
          ...this.state.form,
          [field]: {
            ...this.state.form[field],
            touched: true,
          },
        },
      });
    };
  }

  // Method to clone children and pass new props.
  private cloneChildren = (allChildren: any): ReactNode => {
    const { name } = this.props;

    return React.Children.map(
      allChildren,
      (child: ReactElement<any>, i: number) => {
        if (!child) {
          return null;
        }

        if (child.type === FormField) {
          return (
            <>
              {React.cloneElement(child, {
                key: i,
                formName: name,
                value: this.getFormFieldValue(child.props.name),
                onChange: this.onChangeHandler(child.props.name),
                onFocus: this.onFocusHandler(child.props.name),
                errorMessage: this.getFormFieldError(child.props.name),
                hasError: this.hasError(child.props.name),
                disabled: child.props.disabled || this.state.isLoading,
              })}
            </>
          );
        }

        if (child.type === SubmitButton) {
          return (
            <>
              {React.cloneElement(child, {
                key: i,
                formName: name,
                loading: this.state.isLoading,
                isValid: this.state.isValid,
              })}
            </>
          );
        }
      },
    );
  }
}
