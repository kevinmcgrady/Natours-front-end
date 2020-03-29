import React, { ReactNode } from "react";

interface ISubmitButtonProps {
  loading?: boolean;
  children: ReactNode;
  isValid?: boolean;
}

export const SubmitButton: React.FC<ISubmitButtonProps> = ({
  isValid,
  loading,
  children
}) => {
  return (
    <button disabled={!isValid} type="submit" className="btn btn--green">
      {!loading && children}
      {loading && (
        <div className="spinner">
          <div />
          <div />
          <div />
          <div />
        </div>
      )}
    </button>
  );
};
