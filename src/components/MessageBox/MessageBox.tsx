import React, { useEffect, useState } from "react";
import ChatBubbleReceived from "../ChatBubble/ChatBubbleReceived";
import ChatBubbleSent from "../ChatBubble/ChatBubbleSent";
import MessageDataService, { Message } from "../../services/messages";

interface MessageBoxProps {
  username: string;
}
const MessageBox: React.FC<MessageBoxProps> = ({ username }) => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await MessageDataService.getMessages({
          recipient: username,
        });
        setMessages(response.data);
      } catch (error) {
        console.error("Failed to fetch messages:", error);
      }
    };

    if (username !== "") {
      fetchMessages();
    }
  }, [username]);
  return (
    <div className="message-box">
      {messages.map((mess) => {
        if (mess.sender.username === username) {
          return (
            <ChatBubbleReceived time={mess.createdAt} message={mess.content} />
          );
        } else {
          return (
            <ChatBubbleSent time={mess.createdAt} message={mess.content} />
          );
        }
      })}
    </div>
  );
};

export default MessageBox;
