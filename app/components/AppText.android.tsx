import { ReactNode } from "react";
import { StyleSheet, Text } from "react-native";

interface Props {
  children: ReactNode;
}

const AppText = ({ children }: Props) => {
  return <Text style={styles.text}>{children}</Text>;
};

export default AppText;

const styles = StyleSheet.create({
  text: {
    color: "blue",
    fontSize: 20,
    fontFamily: "Roboto",
  },
});
