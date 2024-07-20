import * as SecureStore from "expo-secure-store";
import { jwtDecode } from "jwt-decode";
import { IUser } from "../interface/user";

const key = "authToken";

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log("Error getting the auth token", error);
  }
};

const authStorage = {
  storeToken: async (token: string) => {
    try {
      await SecureStore.setItemAsync(key, token);
    } catch (err) {
      console.log("Error storing the auth token", err);
    }
  },

  getUser: async (): Promise<IUser | null> => {
    const token = await getToken();

    return token ? jwtDecode(token) : null;
  },

  removeToken: async () => {
    try {
      await SecureStore.deleteItemAsync(key);
    } catch (error) {
      console.log("Error removing the auth token", error);
    }
  },
};
export default authStorage;
