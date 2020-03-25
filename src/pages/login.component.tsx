import React from "react";
import { Page } from "../atomic/atoms/page.component";
import { Form } from "../atomic/organisms/form.component";
import { Input } from "../atomic/atoms/input.component";
import { Label } from "../atomic/atoms/label.component";
import { InputContainer } from "../atomic/molecules/input-container";

const Login: React.FC<{}> = () => {
  return (
    <Page>
      <div className="login-form">
        <h2 className="heading-secondary ma-bt-lg">Log into your accountt</h2>
        <Form name="login" submit={values => console.log(values)}>
          <InputContainer>
            <Label>Email</Label>
            <Input
              validators={[{ type: 'email', length: 0, errorMessage: 'please enter a correct email address' }, { type: 'minLength', length: 20, errorMessage: 'must be 8' }]}
              name="email"
              type="email"
              placeholder="example.com"
              required
            />
          </InputContainer>
          <InputContainer>
            <Label>Password</Label>
            <Input
              name="password"
              type="password"
              placeholder="••••••••"
              required
            />
          </InputContainer>
          <InputContainer>
            <button className="btn btn--green">Log in</button>
          </InputContainer>
        </Form>
      </div>
    </Page>
  );
};

export default Login;
