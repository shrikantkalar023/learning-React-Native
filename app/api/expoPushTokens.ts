import apiClient from "./client";

const expoPushTokens = {
  register: async (token: string) =>
    apiClient.post("/expoPushTokens", { token }),
};

export default expoPushTokens;
