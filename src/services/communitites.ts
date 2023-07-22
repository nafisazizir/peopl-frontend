import http from "../http-common";
import { AxiosResponse } from "axios";
import { setAuthTokenToAxios } from "../hooks/auth";
import { Post } from "./post";

export interface CommunityDetails {
  name: string;
  description: string;
  createdAt: Date;
  isMember: boolean;
  totalMembers: number;
  posts: Post[];
}

class CommunityDataService {
  getCommunityDetails(
    communityName: string
  ): Promise<AxiosResponse<CommunityDetails>> {
    setAuthTokenToAxios(localStorage.token);
    return http.get(`/community/${communityName}`);
  }

  joinCommunity(communityName: string): Promise<AxiosResponse<any>> {
    setAuthTokenToAxios(localStorage.token);
    return http.post(`/community/${communityName}/join`);
  }

  leaveCommunity(communityName: string): Promise<AxiosResponse<any>> {
    setAuthTokenToAxios(localStorage.token);
    return http.post(`/community/${communityName}/leave`);
  }
}

export default new CommunityDataService();
