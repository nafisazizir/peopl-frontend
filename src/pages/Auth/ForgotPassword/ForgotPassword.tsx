import React from "react";
import "./ForgotPasswordStyle.css";
import Label from "../../../components/Label/Label";
import ButtonLarge from "../../../components/Button/Large/ButtonLarge";
import { useNavigate } from "react-router-dom";
import ButtonNormal from "../../../components/Button/Normal/ButtonNormal";

type Props = {};

export default function ForgotPassword({}: Props) {
  const navigate = useNavigate();
  const iconBack = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17 10C17 10.4142 16.6642 10.75 16.25 10.75L5.61208 10.75L9.76983 14.7094C10.0684 14.9965 10.0777 15.4713 9.79062 15.7698C9.50353 16.0684 9.02875 16.0777 8.73017 15.7906L3.23017 10.5406C3.08311 10.3992 3 10.204 3 10C3 9.79599 3.08311 9.60078 3.23017 9.45938L8.73017 4.20938C9.02875 3.92228 9.50353 3.93159 9.79062 4.23017C10.0777 4.52875 10.0684 5.00353 9.76983 5.29063L5.61208 9.25L16.25 9.25C16.6642 9.25 17 9.58579 17 10Z"
        fill="#FC7201"
      />
    </svg>
  );
  return (
    <>
      <div className="logo-app">Peopl.</div>
      <div className="auth-page">
        <div className="forgot-container">
          <div className="navigation">
            <ButtonNormal
              iconLeft={iconBack}
              buttonText={"Back to Login"}
              onClick={() => {
                navigate("../");
              }}
              isSecondary={false}
              isGhost={true}
            ></ButtonNormal>
          </div>
          <div className="forgot-header">
            <h3>Reset Password</h3>
            <div className="body-p7 text-center">
              Please insert the email associated with your account. We will send
              an email with instructions to reset your password.
            </div>
          </div>
          <Label
            labelText={"Email"}
            isRequired={true}
            placeholderText={"youremail@domain.com"}
            value={""}
            onChange={function (
              event: React.ChangeEvent<HTMLInputElement>
            ): void {
              throw new Error("Function not implemented.");
            }}
          />
          <ButtonLarge
            buttonText={"Get Instruction"}
            onClick={function (
              event: React.MouseEvent<HTMLDivElement, MouseEvent>
            ): void {
              throw new Error("Function not implemented.");
            }}
            isSecondary={false}
            isGhost={false}
          />
        </div>
      </div>
    </>
  );
}
