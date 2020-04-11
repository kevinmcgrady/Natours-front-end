export interface IUser {
  role: string;
  photo: string;
  _id: string;
  name: string;
  email: string;
  passwordChngedAt?: string;
  id: string;
}

export interface IUserForSubmission {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}
