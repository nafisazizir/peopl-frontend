import React from "react";
import "./DropdownCommunityStyle.css";

interface DropdownCommunityMatchmakingProps {
  options: string[];
  value: any;
  onChange: any;
}

const DropdownCommunity: React.FC<DropdownCommunityMatchmakingProps> = ({
  options,
  value,
  onChange,
}) => {
  return (
    <div className="matchmaking-input">
      <select
        className="dropdown-community"
        name="community"
        id="community"
        value={value}
        onChange={onChange}
      >
        <option value="" disabled selected hidden>
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="12"
              cy="12.0592"
              r="11.5"
              stroke="#546881"
              stroke-linecap="round"
              stroke-dasharray="4 4"
            />
          </svg>
          None
        </option>
        {options.map((opt) => (
          <option value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
};

export default DropdownCommunity;
