import React from "react";
import "./ButtonAuthStyle.css";

interface ButtonAuthProps {
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const ButtonAuth: React.FC<ButtonAuthProps> = ({ onClick }) => {
  return (
    <div className={"button-auth button-auth-text"} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="29"
        height="29"
        viewBox="0 0 29 29"
        fill="none"
      >
        <path
          d="M25.875 8.75V21C25.875 22.4497 24.6997 23.625 23.25 23.625H5.75C4.30025 23.625 3.125 22.4497 3.125 21V8.75M25.875 8.75C25.875 7.30025 24.6997 6.125 23.25 6.125H5.75C4.30025 6.125 3.125 7.30025 3.125 8.75M25.875 8.75V9.03316C25.875 9.94472 25.4021 10.791 24.6258 11.2688L15.8758 16.6534C15.0321 17.1726 13.9679 17.1726 13.1242 16.6534L4.37424 11.2688C3.59791 10.791 3.125 9.94472 3.125 9.03316V8.75"
          stroke="#0F172A"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <div className="body-p6">Continue with Email</div>
    </div>
  );
};

export default ButtonAuth;
