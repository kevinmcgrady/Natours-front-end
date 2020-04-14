import React from 'react';

interface IInfoCardProps {
  message: string;
  type: 'success' | 'fail';
  width?: 'fullWidth';
}

export const InfoCard: React.FC<IInfoCardProps> = ({
  message,
  type,
  width,
}) => {
  return (
    <div
      className={`${type === 'fail' ? 'errorCard' : 'successCard'} ${width}`}
    >
      <p>{message}</p>
    </div>
  );
};
