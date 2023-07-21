import React, { ReactElement } from "react";
import "./ButtonNormalStyle.css";

interface ButtonNormalProps {
  iconLeft?: ReactElement;
  buttonText: string;
  iconRight?: ReactElement;
  isSecondary: boolean;
  isGhost: boolean;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const ButtonNormal: React.FC<ButtonNormalProps> = ({
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
            ? " button-normal button-normal-ghost-style"
            : isSecondary === true
            ? " button-normal button-normal-secondary-style"
            : " button-normal button-normal-style"
        } onClick={onClick}
      >
        {iconLeft != null && iconLeft}
        {buttonText}
        {iconRight != null && iconRight}
      </div>

  );
};

export default ButtonNormal;
