import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Page } from '../atomic/atoms/page/page.component';
import { ErrorCard } from '../atomic/molecules/cards/error-card/error-card.component';
import { FormField } from '../atomic/molecules/forms/form-field/form-field';
import { Form } from '../atomic/molecules/forms/form/form';
import { PasswordInput } from '../atomic/molecules/forms/password-input/password-input';
import { SubmitButton } from '../atomic/molecules/forms/submit-button/submit-button';
import { TextInput } from '../atomic/molecules/forms/text-input/text-input';
import { email, minLength } from '../core/validators/form/validators';
import { IUserForSubmission } from '../models/user.model';
import { StartCreateNewUser } from '../redux/actions/auth.actions';
import { IAppState } from '../redux/reducers/main.reducer';
import { selectAuthErrorMessage } from '../redux/selectors/auth.selectors';

interface IRegisterProps {
  startCreateNewUser: (user: IUserForSubmission, loader: any) => void;
  errorMessage: string;
}

const Register: React.FC<IRegisterProps> = ({
  startCreateNewUser,
  errorMessage,
}) => {
  return (
    <Page>
      {errorMessage && <ErrorCard message={errorMessage} />}
      <div className='login-form'>
        <h2 className='heading-secondary ma-bt-lg'>Create an account</h2>
        <Form
          name='login'
          state={{ name: '', email: '', password: '', passwordConfirm: '' }}
          onSubmit={(state, loader) =>
            startCreateNewUser(
              {
                name: state.name,
                email: state.email,
                password: state.password,
                passwordConfirm: state.passwordConfirm,
              },
              loader,
            )
          }
        >
          <FormField
            label='Name'
            name='name'
            validator={minLength(10, 'please enter your full name')}
          >
            <TextInput placeholder='John Smith' />
          </FormField>
          <FormField
            label='Email'
            name='email'
            validator={email('please enter your email address')}
          >
            <TextInput placeholder='example.com' />
          </FormField>
          <FormField
            label='Password'
            name='password'
            validator={minLength(8, 'your password must be 8 chars or more')}
          >
            <PasswordInput placeholder='••••••••' />
          </FormField>
          <FormField
            label='Confirm Password'
            name='passwordConfirm'
            validator={minLength(8, 'your password must be 8 chars or more')}
          >
            <PasswordInput placeholder='••••••••' />
          </FormField>
          <SubmitButton>Create Account</SubmitButton>
        </Form>
      </div>
    </Page>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  startCreateNewUser: (user: IUserForSubmission, loader: any) =>
    dispatch(StartCreateNewUser(user, loader)),
});

const mapStateToProps = createStructuredSelector<IAppState, {}>({
  errorMessage: selectAuthErrorMessage,
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
