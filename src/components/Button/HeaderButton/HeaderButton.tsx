import React from "react";
import "./HeaderButtonStyle.css";

interface ButtonHeaderProps {
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const HeaderButton: React.FC<ButtonHeaderProps> = ({ onClick }) => {
  return (
    <div className={"button-header"} onClick={onClick}>
      <div className="button-text">Join</div>
    </div>
  );
};

export default HeaderButton;
