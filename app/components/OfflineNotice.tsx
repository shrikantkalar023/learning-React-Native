import { useNetInfo } from "@react-native-community/netinfo";
import { StyleSheet, View } from "react-native";

import Constants from "expo-constants";
import colors from "../config/colors";
import AppText from "./AppText";

const OfflineNotice = () => {
  const { isInternetReachable, type } = useNetInfo();

  if (type !== "unknown" && isInternetReachable === false)
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No Internet Connection</AppText>
      </View>
    );

  return;
};

export default OfflineNotice;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    top: Constants.statusBarHeight,
    padding: 10,
    position: "absolute",
    width: "100%",
    zIndex: 1,
  },
  text: {
    color: colors.white,
    textAlign: "center",
  },
});
