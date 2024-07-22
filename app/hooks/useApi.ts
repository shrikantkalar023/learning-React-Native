import { ApiResponse } from "apisauce";
import { useState } from "react";

const useApi = <T>(apiFunc: (...args: any[]) => Promise<ApiResponse<T, T>>) => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args: any[]) => {
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);

    setError(!response.ok);
    response.data && setData(response.data);

    return response;
  };

  return { data, error, loading, request };
};

export default useApi;
