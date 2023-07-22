import http from "../http-common";
import { AxiosResponse } from "axios";
import { setAuthTokenToAxios } from "../hooks/auth";
import { Schema } from "mongoose";

export interface Post {
  _id: string;
  title: string;
  content: string;
  author: string;
  community: string;
  totalComments: number;
  createdAt: Date;
  comments: Comment[];
}

export interface Comment{
    _id: string;
    content: string;
    author: Schema.Types.ObjectId;
    parentId: Schema.Types.ObjectId;
    parentType: number;
    createdAt: Date;
    replies: Comment[];
  }

class PostDataService {
  getPosts(): Promise<AxiosResponse<Post[]>> {
    setAuthTokenToAxios(localStorage.token);
    return http.get("/post");
  }

  getPostDetails(postId: string): Promise<AxiosResponse<Post>> {
    setAuthTokenToAxios(localStorage.token);
    return http.get(`/post/${postId}`);
  }

  

  createComment(content: string, parentId: string, parentType:number): Promise<AxiosResponse<Comment[]>> {
    setAuthTokenToAxios(localStorage.token);

    return http.post("/comment", {
      content: content,
      parentType: parentType,
      parentId: parentId,
    });
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
