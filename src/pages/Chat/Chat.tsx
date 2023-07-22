import React, { useEffect, useState } from "react";
import "./ChatStyle.css";
import NavigationBar from "../../components/Navigation/NavigationBar";
import Request from "../../components/Request/Request";
import ConnectionMessage from "../../components/ConnectionsMessage/ConnectionMessage";
import ReqeustDataService, {
  Request as RequestInterface,
} from "../../services/requests";
import MessagePanelRight from "../../components/MessageBox/MessagePanelRight";

const Chat = () => {
  document.body.style.backgroundColor = "var(--neutral-10)";
  document.body.style.margin = "0px 0px 0px 0px";
  const [requests, setRequests] = useState<RequestInterface[]>([]);

  useEffect(() => {
    const fetchPendingRequest = async () => {
      try {
        const response = await ReqeustDataService.getPendingRequest();
        setRequests(response.data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    fetchPendingRequest();
  }, []);

  return (
    <>
      <NavigationBar />
      <div className="chat-layout">
        <div className="requests-box-container">
          <h4>Connection Requests</h4>
          <div className="requests-container">
            {requests?.length > 0 ? (
              requests?.map((req) => (
                <Request id={req._id} username={req.sender.username} />
              ))
            ) : (
              <div style={{ margin: "auto" }}>
                You currently have no pending requests.
              </div>
            )}
          </div>
        </div>
        <div className="chat-box-container">
          <div className="messages-panel">
            <div className="messages-panel-header">
              <h6>Messages</h6>
            </div>
            <svg
              width="303"
              height="2"
              viewBox="0 0 303 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                opacity="0.08"
                y="0.0592041"
                width="349"
                height="1"
                fill="#1D242D"
              />
            </svg>
            <div className="messages-list">
              <ConnectionMessage
                onClick={function (
                  event: React.MouseEvent<HTMLDivElement, MouseEvent>
                ): void {
                  throw new Error("Function not implemented.");
                }}
                username={"u/pikachulovers"}
                preview={"Haha oh man 🔥"}
                time={new Date()}
              />
              <ConnectionMessage
                onClick={function (
                  event: React.MouseEvent<HTMLDivElement, MouseEvent>
                ): void {
                  throw new Error("Function not implemented.");
                }}
                username={"u/pikachulovers"}
                preview={"Wooohooo 🔥"}
                time={new Date()}
              />
            </div>
          </div>
          <MessagePanelRight username={"generativex-ray84"} />
        </div>
      </div>
    </>
  );
};

export default Chat;
