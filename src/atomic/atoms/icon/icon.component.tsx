import React from "react";
import icons from "../../../assets/images/icons.svg";

interface IIconProps {
  iconName: string;
}

export const Icon: React.FC<IIconProps> = ({ iconName }) => {
  return (
    <svg className="card__icon">
      <use xlinkHref={`${icons}#${iconName}`}></use>
    </svg>
  );
};
