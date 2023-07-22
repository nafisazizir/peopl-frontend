import http from "../http-common";
import { AxiosResponse } from "axios";
import {Community, SearchResponse} from "./search";
import {User} from "./user"
import {setAuthTokenToAxios} from "../hooks/auth";

export interface MatchmakingResponse {
    communities: Community[];
    users: User[];
}

class MatchmakingService {
    match(params:any): Promise<AxiosResponse<SearchResponse>> {
        setAuthTokenToAxios(localStorage.token);
        return http.get(`/matchmaking/`, {params});
    }
}

export default new MatchmakingService();