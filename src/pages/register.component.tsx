import React from "react";
import { Page } from "../atomic/atoms/page/page.component";
import { Form } from "../atomic/molecules/forms/form/form";
import { FormField } from "../atomic/molecules/forms/form-field/form-field";
import { TextInput } from "../atomic/molecules/forms/text-input/text-input";
import { PasswordInput } from "../atomic/molecules/forms/password-input/password-input";
import { SubmitButton } from "../atomic/molecules/forms/submit-button/submit-button";
import { email, minLength } from "../core/validators/form/validators";

const Register: React.FC<{}> = () => {
  return (
    <Page>
      <div className="login-form">
        <h2 className="heading-secondary ma-bt-lg">Create an account</h2>
        <Form
          name="login"
          state={{ name: "", email: "", password: "", passwordConfirm: "" }}
          onSubmit={(state, loader) => console.log(state, loader)}
        >
          <FormField
            label="Name"
            name="name"
            validator={minLength(10, "please enter your full name")}
          >
            <TextInput placeholder="John Smith" />
          </FormField>
          <FormField
            label="Email"
            name="email"
            validator={email("please enter your email address")}
          >
            <TextInput placeholder="example.com" />
          </FormField>
          <FormField
            label="Password"
            name="password"
            validator={minLength(8, "your password must be 8 chars or more")}
          >
            <PasswordInput placeholder="••••••••" />
          </FormField>
          <FormField
            label="Confirm Password"
            name="passwordConfirm"
            validator={minLength(8, "your password must be 8 chars or more")}
          >
            <PasswordInput placeholder="••••••••" />
          </FormField>
          <SubmitButton>Create Account</SubmitButton>
        </Form>
      </div>
    </Page>
  );
};

export default Register;
