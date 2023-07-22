import React, { ReactElement } from "react";
import "./ButtonLargeStyle.css";

interface ButtonLargeProps {
  iconLeft?: ReactElement;
  buttonText: string;
  iconRight?: ReactElement;
  isSecondary: boolean;
  isGhost: boolean;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const ButtonLarge: React.FC<ButtonLargeProps> = ({
  iconLeft,
  iconRight,
  isGhost,
  isSecondary,
  buttonText,
  onClick,
}) => {
  return (
    <div
      className={
        isGhost === true
          ? " button-large button-large-ghost-style"
          : isSecondary === true
          ? " button-large button-large-secondary-style"
          : " button-large button-large-style"
      }
      onClick={onClick}
    >
      {iconLeft != null && iconLeft}
      {buttonText}
      {iconRight != null && iconRight}
    </div>
  );
};

export default ButtonLarge;
