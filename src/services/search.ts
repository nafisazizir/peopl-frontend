import http from "../http-common";
import { AxiosResponse } from "axios";
import { Post } from "./post";

export interface Community {
  name: string;
  description: string;
  createdAt: Date;
  members: string[];
}

export interface User {
  username: string;
  email: string;
  password: string;
  googleId?: string;
  resetToken?: string;
  resetTokenExpiration?: Date;
  createdAt: Date;
  followedCommunities: string;
}

export interface SearchResponse {
  posts: Post[];
  communities: Community[];
  users: User[];
}

class SearchDataService {
  search(params: any): Promise<AxiosResponse<SearchResponse>> {
    return http.get("/search", { params });
  }
}

export default new SearchDataService();
