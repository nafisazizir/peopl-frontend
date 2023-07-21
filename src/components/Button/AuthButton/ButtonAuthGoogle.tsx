import React from "react";
import "./ButtonAuthStyle.css";
import logo from "../../../assets/Google__G__Logo 1.png";

interface ButtonAuthGoogleProps {
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const ButtonAuthGoogle: React.FC<ButtonAuthGoogleProps> = ({ onClick }) => {
  return (
    <div className={"button-auth button-auth-text"} onClick={onClick}>
      <img src={logo}></img>
      <div className="body-p6">Continue with Google</div>
    </div>
  );
};

export default ButtonAuthGoogle;
