import React from "react";
import { Page } from "../atomic/atoms/page.component";
import { Form } from "../atomic/organisms/form.component";
import { Input } from "../atomic/atoms/input.component";
import { Label } from "../atomic/atoms/label.component";
import { InputContainer } from "../atomic/molecules/input-container";

const Register: React.FC<{}> = () => {
  return (
    <Page>
      <div className="login-form">
        <h2 className="heading-secondary ma-bt-lg">Create a new account</h2>
        <Form name="register" submit={values => console.log(values)}>
          <InputContainer>
            <Label>Name</Label>
            <Input name="name" type="text" placeholder="Your name" required />
          </InputContainer>
          <InputContainer>
            <Label>Email</Label>
            <Input
              validators={[{ type: 'email', length: 0, errorMessage: 'please enter a correct email address' }]}
              name="email"
              type="email"
              placeholder="example.com"
              required
            />
          </InputContainer>
          <InputContainer>
            <Label>Password</Label>
            <Input
              validators={[{ type: 'minLength', length: 8, errorMessage: 'please choose a password 8 chars' }]}
              name="password"
              type="password"
              placeholder="••••••••"
              required
            />
          </InputContainer>
          <InputContainer>
            <Label>Confirm Password</Label>
            <Input
              validators={[{ type: 'minLength', length: 8, errorMessage: 'please choose a password 8 chars' }]}
              name="confirmPassword"
              type="password"
              placeholder="••••••••"
              required
            />
          </InputContainer>
          <InputContainer>
            <button className="btn btn--green">Create account</button>
          </InputContainer>
        </Form>
      </div>
    </Page>
  );
};

export default Register;
