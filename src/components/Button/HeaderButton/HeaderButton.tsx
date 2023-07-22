import React from "react";
import "./HeaderButtonStyle.css";

interface ButtonHeaderProps {
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  buttonText: string
}

const HeaderButton: React.FC<ButtonHeaderProps> = ({ buttonText, onClick }) => {
  return (
    <div className={"button-header"} onClick={onClick}>
      <div className="button-text">{buttonText}</div>
    </div>
  );
};

export default HeaderButton;
