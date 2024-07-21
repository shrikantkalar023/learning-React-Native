import { ILogInUser, IRegisterUser, IUser } from "../interface/user";
import apiClient from "./client";

const authApi = {
  login: (user: ILogInUser) => apiClient.post<string>("/auth", user),

  register: (user: IRegisterUser) =>
    apiClient.post<IUser & { error?: string }>("/users", user),
};

export default authApi;
