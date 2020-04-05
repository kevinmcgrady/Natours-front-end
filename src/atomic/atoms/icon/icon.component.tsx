import React from "react";
import icons from "../../../assets/images/icons.svg";

interface IIconProps {
  iconName: string;
  className?: string;
  iconClassName?: string;
}

export const Icon: React.FC<IIconProps> = ({
  iconName,
  className,
  iconClassName,
}) => {
  return (
    <svg className={`${!className ? "card__icon" : className}`}>
      <use className={iconClassName} xlinkHref={`${icons}#${iconName}`}></use>
    </svg>
  );
};
