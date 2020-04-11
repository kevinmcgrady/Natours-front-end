import React, { ReactNode } from 'react';

import { Spinner } from '../../../atoms/spinner/spinner.component';

interface ISubmitButtonProps {
  loading?: boolean;
  children: ReactNode;
  isValid?: boolean;
}

export const SubmitButton: React.FC<ISubmitButtonProps> = ({
  isValid,
  loading,
  children,
}) => {
  return (
    <button disabled={!isValid} type='submit' className='btn btn--green'>
      {!loading && children}
      {loading && <Spinner />}
    </button>
  );
};
