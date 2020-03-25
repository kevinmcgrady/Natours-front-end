import { validateEmail, validateMinLength } from './validators';
import { IValidators } from './models';

const toggleErrorMessage = (validator: any, formValidator: IValidators, setMessage: any, values: string[]) => {
  if (validator(...values)) {
    setMessage((messages: string[]) => {
      if (messages.includes(formValidator.errorMessage)) {
        return [...messages]
      } else {
        return [...messages, formValidator.errorMessage]
      }
    });
  } else {
    setMessage((messages: string[]) => {
      return messages.filter((message) => message !== formValidator.errorMessage)
    });
  }
}

export const validate = (e: any, validators: IValidators[] | [], setMessage: any) => {
  validators.forEach((validator) => {
    switch (validator.type) {
      case 'email':
        toggleErrorMessage(validateEmail, validator, setMessage, [e.target.value])
        break;
      case 'minLength':
        toggleErrorMessage(validateMinLength, validator, setMessage, [e.target.value, validator.length])
        break;
    }
  })
}

