import { string } from "yup";

export const email = (message: string) => {
  return string().email(message);
};

export const minLength = (length: number, message: string) => {
  return string().min(length, message);
};

export const required = (message: string) => {
  return string().required(message);
};
