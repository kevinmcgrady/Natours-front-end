import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Page } from '../atomic/atoms/page/page.component';
import { InfoCard } from '../atomic/molecules/cards/info-card/info-card.component';
import { FormField } from '../atomic/molecules/forms/form-field/form-field';
import { Form } from '../atomic/molecules/forms/form/form';
import { PasswordInput } from '../atomic/molecules/forms/password-input/password-input';
import { SubmitButton } from '../atomic/molecules/forms/submit-button/submit-button';
import { TextInput } from '../atomic/molecules/forms/text-input/text-input';
import { email, required } from '../core/validators/form/validators';
import { FetchToken } from '../redux/actions/auth.actions';
import { IAppState } from '../redux/reducers/main.reducer';
import { selectAuthErrorMessage } from '../redux/selectors/auth.selectors';

interface ILoginProps {
  login: (email: string, password: string, loader: any) => void;
  errorMessage: string;
}

const Login: React.FC<ILoginProps> = ({ login, errorMessage }) => {
  return (
    <Page>
      {errorMessage && <InfoCard type='fail' message={errorMessage} />}
      <div className='login-form'>
        <h2 className='heading-secondary ma-bt-lg'>Log into your account</h2>
        <Form
          name='login'
          state={{ email: '', password: '' }}
          onSubmit={(state, loader) =>
            login(state.email, state.password, loader)
          }
        >
          <FormField
            label='Email'
            name='email'
            validator={email('please enter a correct email address')}
          >
            <TextInput placeholder='example.com' />
          </FormField>
          <FormField
            label='Password'
            name='password'
            validator={required('Please enter your password')}
          >
            <PasswordInput placeholder='••••••••' />
          </FormField>
          <SubmitButton>Login</SubmitButton>
        </Form>
      </div>
    </Page>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  login: (userEmail: string, password: string, loader: any) =>
    dispatch(FetchToken(userEmail, password, loader)),
});

const mapStateToProps = createStructuredSelector<IAppState, {}>({
  errorMessage: selectAuthErrorMessage,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
