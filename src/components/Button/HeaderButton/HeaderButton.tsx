import React from "react";
import "./NotifButtonStyle.css";

interface ButtonNotifProps {
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  buttonText: string
}

const HeaderButton: React.FC<ButtonNotifProps> = ({ buttonText, onClick }) => {
  return (
    <div className={"button-header"} onClick={onClick}>
      <div className="button-text">{buttonText}</div>
    </div>
  );
};

export default HeaderButton;
