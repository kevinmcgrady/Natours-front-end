import React from "react";

interface ICardContainerProps {
  children: React.ReactNode;
}

export const CardContainer: React.FC<ICardContainerProps> = ({ children }) => {
  return <div className="card-container">{children}</div>;
};
