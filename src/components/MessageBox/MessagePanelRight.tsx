import React from "react";
import MessageBox from "./MessageBox";
import MessageHeader from "./MessageHeader";
import MessageFooter from "./MessageFooter";

interface MessagePanelRightProps {
  username: string;
}

const MessagePanelRight: React.FC<MessagePanelRightProps> = ({ username }) => {
  const headerLine = (
    <svg
      width="733"
      height="2"
      viewBox="0 0 733 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        opacity="0.08"
        y="0.0592041"
        width="733"
        height="1"
        fill="#1D242D"
      />
    </svg>
  );
  return (
    <div className="message-panel">
      <MessageHeader username={username} />
      {headerLine}
      <MessageBox username={username} />
      <MessageFooter username={username} />
    </div>
  );
};

export default MessagePanelRight;
