import * as SecureStore from "expo-secure-store";
import { jwtDecode } from "jwt-decode";

import { IUser } from "../interface/user";
import logger from "../utility/logger";

const key = "authToken";

const authStorage = {
  storeToken: async (token: string) => {
    try {
      await SecureStore.setItemAsync(key, token);
    } catch (err) {
      logger.log("Error storing the auth token");
      logger.log(err);
    }
  },

  getToken: async () => {
    try {
      return await SecureStore.getItemAsync(key);
    } catch (error) {
      logger.log("Error getting the auth token");
      logger.log(error);
    }
  },

  getUser: async (): Promise<IUser | null> => {
    const token = await authStorage.getToken();

    return token ? jwtDecode<IUser>(token) : null;
  },

  removeToken: async () => {
    try {
      await SecureStore.deleteItemAsync(key);
    } catch (error) {
      logger.log("Error removing the auth token");
      logger.log(error);
    }
  },
};
export default authStorage;
