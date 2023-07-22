import React from "react";
import "./ChatBubbleStyle.css";

interface ChatBubbleReceivedProps {
    message: string
    time: Date
}

function getRelativeTime(time: Date): string {
    const now = new Date();
    const diffInSeconds = Math.floor(
        (now.getTime() - time.getTime()) / 1000
    );

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

const ChatBubbleReceived: React.FC<ChatBubbleReceivedProps> = ({ message, time }) => {
    return (
        <div className="bubble-container">
            <div className="bubble-received">
                <div className="bubble-tex-received">
                    {message}
                </div>
            </div>
            <div className="body-p8">
                {getRelativeTime(new Date(time))}
            </div>
        </div>
    );
};

export default ChatBubbleReceived;

