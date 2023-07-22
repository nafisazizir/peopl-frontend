import http from "../http-common";
import { AxiosResponse } from "axios";
import { setAuthTokenToAxios } from "../hooks/auth";
import { User } from "./user";

export interface Request {
  _id: string;
  sender: User;
  recipient: User;
  status: "pending" | "accepted" | "rejected";
  createdAt: Date;
}
class RequestDataService {
  getPendingRequest(): Promise<AxiosResponse<Request[]>> {
    setAuthTokenToAxios(localStorage.token);
    return http.get("/request");
  }

  acceptRequest(id: string): Promise<AxiosResponse<any>> {
    setAuthTokenToAxios(localStorage.token);
    return http.put(`/request/${id}/accept`);
  }
}

export default new RequestDataService();
