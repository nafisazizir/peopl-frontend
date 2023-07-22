import React, { ChangeEvent, MouseEventHandler, ReactElement } from "react";
import "./LabelStyle.css";
import { Link } from "react-router-dom";

interface LabelProps {
  labelText: string;
  addLink?: string;
  handleAddLink?: MouseEventHandler<HTMLAnchorElement>;
  isRequired: boolean;
  placeholderText: string;
  icon?: ReactElement;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
const Label: React.FC<LabelProps> = ({
  labelText,
  addLink,
  handleAddLink,
  isRequired,
  placeholderText,
  icon,
  value,
  onChange,
}) => {
  return (
    <div className="label-container">
      <div className="label-text-field">
        <div className="label-text">
          <h6>{labelText}</h6>
          {isRequired === true && <h6 className="text-danger"> *</h6>}
        </div>
        {addLink != null && (
          <Link to={"./forgot"}>
            <div className="text-orange-primary ">{addLink}</div>
          </Link>
        )}
      </div>

      <div className="input-container">
        <input
          type={
            labelText === "Password" ||
            labelText === "Confirm your Password" ||
            labelText === "Your New Password" ||
            labelText === "Confirm Your New Password"
              ? "password"
              : "text"
          }
          className="label-input"
          placeholder={placeholderText}
          value={value}
          onChange={onChange}
        />
        {/* {icon != null && <div className="icon-container">{icon}</div>} */}
      </div>
    </div>
  );
};

export default Label;
