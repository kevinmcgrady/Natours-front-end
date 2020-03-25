export interface IValidators {
  type: 'email' | 'minLength' | 'confirmPassword';
  length: number;
  errorMessage: string;
}