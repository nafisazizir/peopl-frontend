import React from "react";
import "./NotifButtonStyle.css";

interface ButtonHeaderProps {
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  buttonText: string;
}

const NotifButton: React.FC<ButtonHeaderProps> = ({ buttonText, onClick }) => {
  return (
    <div className={"button-header-notif"} onClick={onClick}>
      <div className="button-text-notif">{buttonText}</div>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.76711 11.8159C5.53743 11.577 5.54488 11.1972 5.78374 10.9675L8.93395 8L5.78374 5.0325C5.54488 4.80282 5.53743 4.423 5.76711 4.18413C5.99679 3.94527 6.37661 3.93782 6.61547 4.1675L10.2155 7.5675C10.3331 7.68062 10.3996 7.83679 10.3996 8C10.3996 8.16321 10.3331 8.31938 10.2155 8.4325L6.61548 11.8325C6.37661 12.0622 5.99679 12.0547 5.76711 11.8159Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default NotifButton;
