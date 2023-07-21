import React, { ChangeEvent, useState } from "react";
import "./RegisterStyle.css";
import Label from "../../../components/Label/Label";

import ButtonAuthGoogle from "../../../components/Button/AuthButton/ButtonAuthGoogle";
import { useNavigate } from "react-router-dom";
import ButtonLarge from "../../../components/Button/Large/ButtonLarge";

type Props = {};

export default function Register({}: Props) {
  const navigate = useNavigate();
  const iconPassword = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.28033 2.78217C2.98744 2.48928 2.51256 2.48928 2.21967 2.78217C1.92678 3.07506 1.92678 3.54994 2.21967 3.84283L16.7197 18.3428C17.0126 18.6357 17.4874 18.6357 17.7803 18.3428C18.0732 18.0499 18.0732 17.5751 17.7803 17.2822L16.0352 15.537C17.5064 14.4219 18.6595 12.909 19.3344 11.1584C19.4814 10.7769 19.4816 10.3538 19.3347 9.97212C17.892 6.22301 14.256 3.5625 9.99859 3.5625C8.28207 3.5625 6.66657 3.99499 5.2551 4.75694L3.28033 2.78217ZM7.75194 7.25378L8.84367 8.34551C9.18951 8.16473 9.58291 8.0625 10.0002 8.0625C11.3809 8.0625 12.5002 9.18179 12.5002 10.5625C12.5002 10.9798 12.398 11.3732 12.2172 11.719L13.3091 12.8109C13.7454 12.1702 14.0004 11.3961 14.0004 10.5625C14.0004 8.35336 12.2095 6.5625 10.0004 6.5625C9.16675 6.5625 8.39268 6.81751 7.75194 7.25378Z"
        fill="#9CAABA"
      />
      <path
        d="M10.7484 14.4927L13.2711 17.0154C12.2462 17.3699 11.1458 17.5625 10.0004 17.5625C5.74298 17.5625 2.10698 14.902 0.664255 11.1529C0.517392 10.7712 0.517518 10.3481 0.66461 9.96658C1.15603 8.69182 1.90108 7.54307 2.83791 6.58219L6.0702 9.81448C6.02436 10.0568 6.00037 10.3068 6.00037 10.5625C6.00037 12.7716 7.79123 14.5625 10.0004 14.5625C10.256 14.5625 10.5061 14.5385 10.7484 14.4927Z"
        fill="#9CAABA"
      />
    </svg>
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
  };

  const handleConfirmPasswordChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const newConfirmPassword = event.target.value;
    setConfirmPassword(newConfirmPassword);
  };

  return (
    <>
      <div className="logo-app">Peopl.</div>
      <div className="auth-page">
        <div className="regist-container">
          <h3>Register</h3>
          <div className="regist-form-container">
            <Label
              labelText={"Email"}
              placeholderText={"youremail@domain.com"}
              icon={undefined}
              value={email}
              onChange={handleEmailChange}
              isRequired={true}
            ></Label>
            <Label
              labelText={"Password"}
              placeholderText={""}
              icon={iconPassword}
              value={password}
              onChange={handlePasswordChange}
              isRequired={true}
            ></Label>
            <Label
              labelText={"Confirm your Password"}
              placeholderText={""}
              icon={iconPassword}
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              isRequired={true}
            ></Label>
            <ButtonLarge
              buttonText={"Register"}
              onClick={function (
                event: React.MouseEvent<HTMLDivElement, MouseEvent>
              ): void {
                throw new Error("Function not implemented.");
              }}
              isSecondary={false}
              isGhost={false}
            ></ButtonLarge>
            <div className="or-container">
              <hr className="line" />
              <div className="body-p6 or">or</div>
              <hr className="line" />
            </div>
            <ButtonAuthGoogle
              onClick={() => {
                navigate("/xxxx");
              }}
            />
            <div className="login-frame">
              <div className="body-p6">Already have an account?</div>
              <a
                onClick={() => {
                  navigate("/login");
                }}
              >
                <div className="body-p6 login-text">Log In</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
