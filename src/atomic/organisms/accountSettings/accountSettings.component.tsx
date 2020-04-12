import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { email, required } from '../../../core/validators/form/validators';
import { IUser } from '../../../models/user.model';
import { StartStoreUserDetails } from '../../../redux/actions/user.actions';
import { IAppState } from '../../../redux/reducers/main.reducer';
import { selectLoggedInUser } from '../../../redux/selectors/auth.selectors';
import { FormField } from '../../molecules/forms/form-field/form-field';
import { Form } from '../../molecules/forms/form/form';
import { PasswordInput } from '../../molecules/forms/password-input/password-input';
import { SubmitButton } from '../../molecules/forms/submit-button/submit-button';
import { TextInput } from '../../molecules/forms/text-input/text-input';

interface IAccountSettingsProps {
  user: IUser;
  submitDetails: (email: string, name: string, loader: any) => void;
}

const AccountSettings: React.FC<IAccountSettingsProps> = ({
  user,
  submitDetails,
}) => {
  return (
    <>
      <div className='user-view__form-container'>
        <h2 className='heading-secondary ma-bt-md'>Your account settings</h2>
        <Form
          name='accountSettings'
          state={{ name: user.name, email: user.email }}
          onSubmit={(state, loader) =>
            submitDetails(state.email, state.name, loader)
          }
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

const mapStateToProps = createStructuredSelector<IAppState, {}>({
  user: selectLoggedInUser,
});

const mapDispatchToProps = (dispatch: any) => ({
  submitDetails: (userEmail: string, name: string, loader: any) =>
    dispatch(StartStoreUserDetails(userEmail, name, loader)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountSettings);
