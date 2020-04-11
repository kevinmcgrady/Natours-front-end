import React from 'react';

import { email, required } from '../../../core/validators/form/validators';
import { FormField } from '../../molecules/forms/form-field/form-field';
import { Form } from '../../molecules/forms/form/form';
import { PasswordInput } from '../../molecules/forms/password-input/password-input';
import { SubmitButton } from '../../molecules/forms/submit-button/submit-button';
import { TextInput } from '../../molecules/forms/text-input/text-input';

const AccountSettings: React.FC<{}> = () => {
  return (
    <>
      <div className='user-view__form-container'>
        <h2 className='heading-secondary ma-bt-md'>Your account settings</h2>
        <Form
          name='accountSettings'
          state={{ name: '', email: '' }}
          onSubmit={(state, loader) => console.log(state)}
        >
          <FormField
            label='Name'
            name='name'
            validator={required('Please enter your name')}
          >
            <TextInput placeholder='John Smith' />
          </FormField>
          <FormField
            label='Email address'
            name='email'
            validator={email('Please enter your email address')}
          >
            <TextInput placeholder='example.com' />
          </FormField>
          <SubmitButton>Save settings</SubmitButton>
        </Form>
      </div>
      <div className='line'>&nbsp;</div>
      <div className='user-view__form-container'>
        <h2 className='heading-secondary ma-bt-md'>Password change</h2>
        <Form
          name='passwordChange'
          state={{ currentPassword: '', newPassword: '', passwordConfirm: '' }}
          onSubmit={(state, loader) => console.log(state)}
        >
          <FormField
            label='Current password'
            name='currentPassword'
            validator={required('Please enter your current password')}
          >
            <PasswordInput placeholder='••••••••' />
          </FormField>
          <FormField
            label='New password'
            name='newPassword'
            validator={required('Please enter your new password')}
          >
            <PasswordInput placeholder='••••••••' />
          </FormField>
          <FormField
            label='Confirm password'
            name='passwordConfirm'
            validator={required('Please confirm your password')}
          >
            <PasswordInput placeholder='••••••••' />
          </FormField>
          <SubmitButton>Save Password</SubmitButton>
        </Form>
      </div>
    </>
  );
};

export default AccountSettings;
