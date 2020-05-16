import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Page } from '../atomic/atoms/page/page.component';
import { InfoCard } from '../atomic/molecules/cards/info-card/info-card.component';
import { FormField } from '../atomic/molecules/forms/form-field/form-field';
import { Form } from '../atomic/molecules/forms/form/form';
import { PasswordInput } from '../atomic/molecules/forms/password-input/password-input';
import { SubmitButton } from '../atomic/molecules/forms/submit-button/submit-button';
import { minLength } from '../core/validators/form/validators';
import { StartResetPassword } from '../redux/actions/auth.actions';
import { IAppState } from '../redux/reducers/main.reducer';
import { selectAuthErrorMessage } from '../redux/selectors/auth.selectors';

interface IResetPasswordProps {
  startResetPassword: (
    newPassword: string,
    newPasswordConfirm: string,
    token: string,
    loader: any,
  ) => void;
  errorMessage: string;
  match: any;
}

const ResetPassword: React.FC<IResetPasswordProps> = ({
  startResetPassword,
  errorMessage,
  match,
}) => {
  const token = match.params.token;
  return (
    <Page>
      {errorMessage && <InfoCard type='fail' message={errorMessage} />}
      <div className='login-form'>
        <h2 className='heading-secondary ma-bt-lg'>Reset your password</h2>
        <Form
          name='reset-password-form'
          state={{ newPassword: '', newPasswordConfirm: '' }}
          onSubmit={(state, loader) =>
            startResetPassword(
              state.newPassword,
              state.newPasswordConfirm,
              token,
              loader,
            )
          }
        >
          <FormField
            label='New password'
            name='newPassword'
            validator={minLength(8, 'Password must be 8 chars or more')}
          >
            <PasswordInput placeholder='••••••••' />
          </FormField>

          <FormField
            label='Confirm password'
            name='newPasswordConfirm'
            validator={minLength(8, 'Password must be 8 chars or more')}
          >
            <PasswordInput placeholder='••••••••' />
          </FormField>
          <SubmitButton>Update password</SubmitButton>
        </Form>
      </div>
    </Page>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  startResetPassword: (
    newPassword: string,
    newPasswordConfirm: string,
    token: string,
    loader: any,
  ) =>
    dispatch(
      StartResetPassword(newPassword, newPasswordConfirm, token, loader),
    ),
});

const mapStateToProps = createStructuredSelector<IAppState, {}>({
  errorMessage: selectAuthErrorMessage,
});

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
