import React from "react";
import "./DropdownCommunityStyle.css";

interface DropdownCommunityProps {
  labelText: string;
  isRequired: boolean;
  options: string[];
  value: any;
  onChange: any;
}

const DropdownCommunity: React.FC<DropdownCommunityProps> = ({
  labelText,
  isRequired,
  options,
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
      </div>

      <div className="input-container">
        <select
          className="dropdown-community"
          name="community"
          id="community"
          value={value}
          onChange={onChange}
        >
          <option value="" disabled selected hidden>
            Choose your audience
          </option>
          {options.map((opt) => (
            <option value={opt}>{opt}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DropdownCommunity;
