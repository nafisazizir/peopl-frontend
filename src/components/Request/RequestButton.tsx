import React, { ReactElement } from "react";
import "./RequestButtonStyle.css";

interface ButtonRequestProps {
  iconLeft?: ReactElement;
  buttonText: string;
  iconRight?: ReactElement;
  isSecondary: boolean;
  isGhost: boolean;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const ButtonRequest: React.FC<ButtonRequestProps> = ({
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
          ? " button-request-normal button-request-normal-ghost-style"
          : isSecondary === true
          ? " button-request-normal button-request-normal-secondary-style"
          : " button-request-normal button-request-normal-style"
      }
      onClick={onClick}
    >
      {iconLeft != null && iconLeft}
      {buttonText}
      {iconRight != null && iconRight}
    </div>
  );
};

export default ButtonRequest;
