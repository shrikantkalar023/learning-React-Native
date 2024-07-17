import apiClient from "./client";

const authApi = {
  login: (email: string, password: string) =>
    apiClient.post("/auth", { email, password }),
};

export default authApi;
