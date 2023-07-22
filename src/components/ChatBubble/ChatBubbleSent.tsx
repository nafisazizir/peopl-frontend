import React from "react";
import "./ChatBubbleStyle.css";

interface ChatBubbleSentProps {
  message: string;
  time: Date;
}

function getRelativeTime(time: Date): string {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - time.getTime()) / 1000);

  const timeUnits: { [unit: string]: number } = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
  };

  for (const unit in timeUnits) {
    const seconds = timeUnits[unit as keyof typeof timeUnits];
    const interval = Math.floor(diffInSeconds / seconds);

    if (interval >= 1) {
      return `${interval}${unit.charAt(0)}`;
    }
  }

  return "now";
}

const ChatBubbleReceived: React.FC<ChatBubbleSentProps> = ({
  message,
  time,
}) => {
  return (
    <div className="bubble-container">
      <div className="body-p8">{getRelativeTime(new Date(time))}</div>
      <div className="bubble-sent">
        <div className="bubble-text-sent">{message}</div>
      </div>
    </div>
  );
};

export default ChatBubbleReceived;
