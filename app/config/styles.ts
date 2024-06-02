import { Platform } from "react-native";
import colors from "./colors";

const defaultStyles = {
  colors,
  text: {
    color: colors.dark,
    fontSize: 18,
    ...Platform.select({
      ios: {
        fontFamily: "Avenir",
      },
      android: {
        fontFamily: "Roboto",
      },
    }),
  },
};
export default defaultStyles;
