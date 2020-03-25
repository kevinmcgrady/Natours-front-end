export const validateEmail = (email: string): boolean => {
  if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    return true;
  }
  return false;
}

export const validateMinLength = (value: string, length: number): boolean => {
  if (value.length < length) {
    return true;
  }
  return false;
}