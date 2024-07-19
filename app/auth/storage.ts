import * as SecureStore from "expo-secure-store";

const key = "authToken";

const authStorage = {
  storeToken: async (token: string) => {
    try {
      await SecureStore.setItemAsync(key, token);
    } catch (err) {
      console.log("Error storing the auth token", err);
    }
  },
  getToken: async () => {
    try {
      return await SecureStore.getItemAsync(key);
    } catch (error) {
      console.log("Error getting the auth token", error);
    }
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
