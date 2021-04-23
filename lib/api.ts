import Axios, { AxiosInstance, AxiosRequestConfig } from "axios";
interface ApiSuccessResponse<Result = any> {
  success: true; // api가 기대 동작을 올바르게 수행했는지 나타내는 필드
  result: Result; // 데이터가 담겨오는 필드
}
interface ApiFailedResponse {
  success: false;
  error: {
    // 에러가 담겨오는 필드
    userMessage: string; // 유저에게 나타낼 메시지
    devMessage: string; // 개발자가 볼 메시지
    request?: {
      // 요청으로 보낸 리퀘스트 인자들
      headers: any;
      body: any;
      query: any;
      params: any;
    };
  };
}
export type ApiResponse<Result = any> =
  | ApiSuccessResponse<Result>
  | ApiFailedResponse;

let api: Api | undefined = undefined;

class Api {
  private axios: AxiosInstance;
  constructor(ctx?: any) {
    const config: AxiosRequestConfig = {
      baseURL: process.env.API_END_POINT as string,
      headers: { "Content-Type": "application/json" },
    };
    this.axios = Axios.create(config);
  }
  post<Result>(route: string, body?: any) {
    return this.axios.post<ApiResponse<Result>>(route, body);
  }
  get<Result>(route: string, params?: any) {
    return this.axios.get<ApiResponse<Result>>(route, { params });
  }
}
export const renewApi = (ctx?: any) => (api = new Api(ctx));
export const getApi = (ctx?: any) => api || (api = new Api(ctx));
