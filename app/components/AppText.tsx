import { ReactNode } from "react";
import { Text, Platform, StyleSheet } from "react-native";

interface Props {
  children: ReactNode;
}

const AppText = ({ children }: Props) => {
  return <Text style={styles.text}>{children}</Text>;
};

export default AppText;

const styles = StyleSheet.create({
  text: {
    color: "red",
    fontSize: 20,
    ...Platform.select({
      ios: {
        fontFamily: "Avenir",
      },
      android: {
        fontFamily: "Roboto",
      },
    }),
  },
});
