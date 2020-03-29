import React from "react";
import { Page } from "../atomic/atoms/page/page.component";
import { Form } from "../atomic/molecules/forms/form/form";
import { FormField } from "../atomic/molecules/forms/form-field/form-field";
import { TextInput } from "../atomic/molecules/forms/text-input/text-input";
import { PasswordInput } from "../atomic/molecules/forms/password-input/password-input";
import { SubmitButton } from "../atomic/molecules/forms/submit-button/submit-button";
import { required, email } from "../core/validators/form/validators";

const Login: React.FC<{}> = () => {
  return (
    <Page>
      <div className="login-form">
        <h2 className="heading-secondary ma-bt-lg">Log into your account</h2>
        <Form
          name="login"
          state={{ email: "", password: "" }}
          onSubmit={(state, loader) => console.log(state, loader)}
        >
          <FormField
            label="Email"
            name="email"
            validator={email("please enter a correct email address")}
          >
            <TextInput placeholder="example.com" />
          </FormField>
          <FormField
            label="Password"
            name="password"
            validator={required("Please enter your password")}
          >
            <PasswordInput placeholder="••••••••" />
          </FormField>
          <SubmitButton>Login</SubmitButton>
        </Form>
      </div>
    </Page>
  );
};

export default Login;
