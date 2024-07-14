import { ApiResponse, create } from "apisauce";
import { AxiosRequestConfig } from "axios";
import cache from "../utility/cache";

const apiClient = create({
  baseURL: "http://localhost:9000/api",
});

export default apiClient;

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

  console.log("using cache");
  const data = await cache.get(url);
  return data
    ? { ok: true, data: data as T, originalError: null, problem: null }
    : response;
};
