import React from 'react';

import { Page } from '../atomic/atoms/page/page.component';
import { FormField } from '../atomic/molecules/forms/form-field/form-field';
import { Form } from '../atomic/molecules/forms/form/form';
import { SubmitButton } from '../atomic/molecules/forms/submit-button/submit-button';
import { TextInput } from '../atomic/molecules/forms/text-input/text-input';
import { email } from '../core/validators/form/validators';

const ForgotPassword: React.FC<{}> = () => {
  return (
    <Page>
      <div className='login-form'>
        <h2 className='heading-secondary ma-bt-lg'>Forgot your password?</h2>
        <Form
          name='forgot-password-form'
          state={{ email: '' }}
          onSubmit={(state, loader) => null}
        >
          <FormField
            label='Email'
            name='email'
            validator={email('please enter a correct email address')}
          >
            <TextInput placeholder='example.com' />
          </FormField>
          <SubmitButton>Email new password</SubmitButton>
        </Form>
      </div>
    </Page>
  );
};

export default ForgotPassword;
