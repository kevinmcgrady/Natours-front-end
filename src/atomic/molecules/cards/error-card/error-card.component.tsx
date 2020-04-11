import React from 'react';

interface IErrorCardProps {
  message: string;
}

export const ErrorCard: React.FC<IErrorCardProps> = ({ message }) => {
  return (
    <div className='errorCard'>
      <p>{message}</p>
    </div>
  );
};
