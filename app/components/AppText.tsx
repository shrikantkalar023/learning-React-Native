import { ReactNode } from "react";
import { Text, StyleSheet, Platform } from "react-native";

interface Props {
  children: ReactNode;
}

const AppText = ({ children }: Props) => {
  return <Text style={styles.text}>{children}</Text>;
};

export default AppText;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
