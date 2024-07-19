import apiClient from "./client";

const authApi = {
  login: (email: string, password: string) =>
    apiClient.post<string>("/auth", { email, password }),
};

export default authApi;
