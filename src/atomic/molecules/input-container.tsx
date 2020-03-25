import React, { ReactNode } from "react";

interface IInputContainerProps {
  children: ReactNode;
}

export const InputContainer: React.FC<IInputContainerProps> = ({
  children
}) => {
  return <div className="form__group">{children}</div>;
};
