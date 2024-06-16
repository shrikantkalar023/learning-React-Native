import { ApiResponse } from "apisauce";
import { useState } from "react";

const useApi = <T>(apiFunc: () => Promise<ApiResponse<T, T>>) => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async () => {
    setLoading(true);
    const response = await apiFunc();
    setLoading(false);

    if (!response.ok) return setError(true);

    setError(false);
    response.data && setData(response.data);
  };

  return { data, error, loading, request };
};

export default useApi;
