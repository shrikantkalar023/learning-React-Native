import { ApiResponse, create } from "apisauce";
import { AxiosRequestConfig } from "axios";

import authStorage from "../auth/storage";
import settings from "../config/settings";
import cache from "../utility/cache";

const apiClient = create({
  baseURL: settings.apiUrl,
});
export default apiClient;

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  if (!authToken) return;

  request.headers = request.headers || {};
  request.headers["x-auth-token"] = authToken;
});

const get = apiClient.get;
apiClient.get = async <T, U = T>(
  url: string,
  params?: {} | undefined,
  axiosConfig?: AxiosRequestConfig<any> | undefined
): Promise<ApiResponse<T, U>> => {
  const response: ApiResponse<T, U> = await get(url, params, axiosConfig);
  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  const data = await cache.get(url);
  return data
    ? { ok: true, data: data as T, originalError: null, problem: null }
    : response;
};
