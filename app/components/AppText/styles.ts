import { Platform, StyleSheet } from "react-native";

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

export default styles;
