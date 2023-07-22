import { ChangeEvent, useState } from "react";
import Label from "../../../components/Label/Label";
import ButtonLarge from "../../../components/Button/Large/ButtonLarge";
import "./ResetPasswordStyle.css";

type Props = {};

export default function ResetPassword({}: Props) {
  const [newPassword, setNewPassword] = useState("");
  const [newConfirmPassword, setNewConfirmPassword] = useState("");

  const handleNewPassword = (event: ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    setNewPassword(newPassword);
  };

  const handleNewConfirmPassword = (event: ChangeEvent<HTMLInputElement>) => {
    const newConfirmPassword = event.target.value;
    setNewConfirmPassword(newConfirmPassword);
  };

  return (
    <>
      <div className="logo-app">Peopl.</div>
      <div className="auth-page">
        <div className="reset-container">
          <h3>Reset Password</h3>
          <div className="body-p6 text-center">
            Your new password must be different from the previous password
          </div>
          <Label
            labelText={"Your New Password"}
            isRequired={true}
            placeholderText={""}
            value={newPassword}
            onChange={handleNewPassword}
          ></Label>
          <Label
            labelText={"Confirm Your New Password"}
            isRequired={true}
            placeholderText={""}
            value={newConfirmPassword}
            onChange={handleNewConfirmPassword}
          ></Label>
          <ButtonLarge
            buttonText={"Reset My Password"}
            onClick={function (): void {
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
