import http from "../http-common";
import { AxiosResponse } from "axios";

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
    return http.get("/post");
  }
}

export default new PostDataService();
