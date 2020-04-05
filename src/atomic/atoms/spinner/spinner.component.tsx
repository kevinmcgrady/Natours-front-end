import React from "react";

interface ISpinnerProps {
  large?: boolean;
}

export const Spinner: React.FC<ISpinnerProps> = ({ large }) => {
  return (
    <div className="spinnerContainer">
      <div className={`${large ? "largeSpinner" : "spinner"}`}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};
