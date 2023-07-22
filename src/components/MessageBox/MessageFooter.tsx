import React, { ChangeEvent, useState } from "react";
import "./MessageFooterStyle.css";
import MessageDataService from "../../services/messages";

interface MessageFooterProps {
  username: string;
}
const MessageFooter: React.FC<MessageFooterProps> = ({ username }) => {
  const sendIcon = (
    <svg
      width="23"
      height="24"
      viewBox="0 0 23 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_157_50552)">
        <path
          d="M8.85803 14.8878L3.38672 11.9912C7.411 9.77868 11.7354 8.31082 16.158 7.58762C15.4348 12.0102 13.967 16.3346 11.7545 20.3589L8.85803 14.8878ZM8.85803 14.8878L12.3937 11.3521"
          stroke="#FC7201"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_157_50552">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(0.371094 12.0592) rotate(-45)"
          />
        </clipPath>
      </defs>
    </svg>
  );
  const [isFocused, setIsFocused] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleSendMessage = async () => {
    if (message !== "") {
      try {
        const res = await MessageDataService.sendMessage(username, message);
        location.reload();
      } catch (error) {
        console.error("Failed to send message:", error);
      }
    }
  };

  return (
    <div className="message-input-container">
      {username !== "" && (
        <div className="message-input">
          <input
            className="search-input-message"
            placeholder="Type a message"
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            value={message}
          />
          <div onClick={handleSendMessage}>{sendIcon}</div>
        </div>
      )}
    </div>
  );
};

export default MessageFooter;
