import http from "../http-common";
import { AxiosResponse } from "axios";
import { setAuthTokenToAxios } from "../hooks/auth";

export interface Post {
  title: string;
  content: string;
  author: string;
  community: string;
  totalComments: number;
  createdAt: Date;
}

class PostDataService {
  getPosts(): Promise<AxiosResponse<Post[]>> {
    setAuthTokenToAxios(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRoZVNraXBwZXI2OSIsImVtYWlsIjoicGV0ZXIuc3V0aGVybGFuZEBnbWFpbC5jb20iLCJpYXQiOjE2ODk4NjM2MTQsImV4cCI6MTcyMTM5OTYxNH0.gFdxk50oVCd1PmgKPE51SnW0FZGPa33vAkFV6xQRLDc"
    );
    return http.get("/post");
  }
}

export default new PostDataService();
