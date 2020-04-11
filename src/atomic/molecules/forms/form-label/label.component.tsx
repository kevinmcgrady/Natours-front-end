import React, { ReactNode } from 'react';

interface ILabelProps {
  children: ReactNode;
}

export const Label: React.FC<ILabelProps> = ({ children }) => {
  return <label className='form__label'>{children}</label>;
};
