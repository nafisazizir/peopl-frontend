import http from "../http-common";
import { AxiosResponse } from "axios";
import { setAuthTokenToAxios } from "../hooks/auth";
import { Post } from "./post";

interface User {
  username: string;
  email: string;
  password: string;
  googleId?: string;
  resetToken?: string;
  resetTokenExpiration?: Date;
  createdAt: Date;
  followedCommunities: string[];
}

interface Token {
  token: string;
}

export interface UserDetails {
  username: string;
  email: string;
  followedCommunities: string[];
  posts: Post[];
}

class UserDataService {
  register(email: string, password: string): Promise<AxiosResponse<Token>> {
    return http
      .post("/user/register", { email: email, password: password })
      .then((response: AxiosResponse<Token>) => {
        console.log(response.data);
        const { token } = response.data;
        localStorage.token = token;
        setAuthTokenToAxios(token);
        return response;
      });
  }

  login(email: string, password: string): Promise<AxiosResponse<Token>> {
    return http
      .post("/user/login", { email: email, password: password })
      .then((response: AxiosResponse<Token>) => {
        const { token } = response.data;
        localStorage.token = token;
        setAuthTokenToAxios(token);
        return response;
      });
  }

  getUsernameRecommendation(): Promise<AxiosResponse<string[]>> {
    return http.get("/user/username");
  }

  setNewUsername(newUsername: string): Promise<AxiosResponse<Token>> {
    return http
      .post("/user/set-username", { username: newUsername })
      .then((response: AxiosResponse<Token>) => {
        const { token } = response.data;
        localStorage.token = token;
        setAuthTokenToAxios(token);
        return response;
      });
  }

  getUserDetails(username: string): Promise<AxiosResponse<UserDetails>> {
    return http.get(`/user/${username}`);
  }
}

export default new UserDataService();
