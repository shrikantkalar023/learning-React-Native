import AsyncStorage from "@react-native-async-storage/async-storage";
import logger from "./logger";

const prefix = "cached";
const expiryInMilliseconds = 5 * 60 * 1000;

const store = async (key: string, value: unknown) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };

    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    logger.log(error);
  }
};

const isExpired = (item: { timestamp: number }) => {
  return Date.now() - item.timestamp > expiryInMilliseconds;
};

const get = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);
    if (!value) return;

    const item: {
      value: unknown;
      timestamp: number;
    } = JSON.parse(value);

    // Command Query Separation (CQS) principle is violated here
    if (isExpired(item)) {
      await AsyncStorage.removeItem(prefix + key);
      return;
    }

    return item.value;
  } catch (error) {
    logger.log(error);
  }
};

export default { store, get };
