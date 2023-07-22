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
    setAuthTokenToAxios(localStorage.token);
    return http.get("/post");
  }

  createPost(
    title: string,
    content: string,
    community: string
  ): Promise<AxiosResponse<Post[]>> {
    setAuthTokenToAxios(localStorage.token);
    return http.post("/post", {
      title: title,
      content: content,
      community: community,
    });
  }
}

export default new PostDataService();
