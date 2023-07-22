import http from "../http-common";
import { AxiosResponse } from "axios";
import { setAuthTokenToAxios } from "../hooks/auth";
import { User } from "./user";

export interface Message {
  sender: User;
  recipient: User;
  content: string;
  createdAt: Date;
}

class MessageDataService {
  getMessages(params: any): Promise<AxiosResponse<Message[]>> {
    setAuthTokenToAxios(localStorage.token);
    return http.get("/message", { params });
  }

  sendMessage(
    recipient: string,
    content: string
  ): Promise<AxiosResponse<Message>> {
    setAuthTokenToAxios(localStorage.token);
    return http.post("/message", { recipient: recipient, content: content });
  }
}

export default new MessageDataService();
