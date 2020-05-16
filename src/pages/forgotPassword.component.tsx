import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Page } from '../atomic/atoms/page/page.component';
import { InfoCard } from '../atomic/molecules/cards/info-card/info-card.component';
import { FormField } from '../atomic/molecules/forms/form-field/form-field';
import { Form } from '../atomic/molecules/forms/form/form';
import { SubmitButton } from '../atomic/molecules/forms/submit-button/submit-button';
import { TextInput } from '../atomic/molecules/forms/text-input/text-input';
import { email } from '../core/validators/form/validators';
import { StartForgotPassword } from '../redux/actions/auth.actions';
import { IAppState } from '../redux/reducers/main.reducer';
import { selectAuthErrorMessage } from '../redux/selectors/auth.selectors';

interface IForgotPasswordProps {
  startForgotPassword: (email: string, loader: any) => void;
  errorMessage: string;
}

const ForgotPassword: React.FC<IForgotPasswordProps> = ({
  startForgotPassword,
  errorMessage,
}) => {
  return (
    <Page>
      {errorMessage && <InfoCard type='fail' message={errorMessage} />}
      <div className='login-form'>
        <h2 className='heading-secondary ma-bt-lg'>Forgot your password?</h2>
        <Form
          name='forgot-password-form'
          state={{ email: '' }}
          onSubmit={(state, loader) => startForgotPassword(state.email, loader)}
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

const mapDispatchToProps = (dispatch: any) => ({
  startForgotPassword: (userEmail: string, loader: any) =>
    dispatch(StartForgotPassword(userEmail, loader)),
});

const mapStateToProps = createStructuredSelector<IAppState, {}>({
  errorMessage: selectAuthErrorMessage,
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
