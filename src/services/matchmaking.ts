import http from "../http-common";
import { AxiosResponse } from "axios";
import { setAuthTokenToAxios } from "../hooks/auth";

export interface Matchmaking {
  username: string;
  mutualCommunities: number;
  callToAction: string;
}

class MatchmakingService {
  getMatchUsers(params: any): Promise<AxiosResponse<Matchmaking[]>> {
    setAuthTokenToAxios(localStorage.token);
    return http.get(`/matchmaking`, { params });
  }
}

export default new MatchmakingService();
