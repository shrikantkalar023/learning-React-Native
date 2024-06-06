import { ReactNode } from "react";
import { Text, TextProps } from "react-native";
import defaultStyles from "../config/styles";

interface Props extends TextProps {
  children: ReactNode;
  style?: object;
}

const AppText = ({ children, style, ...textProps }: Props) => {
  return (
    <Text style={[defaultStyles.text, style]} {...textProps}>
      {children}
    </Text>
  );
};

export default AppText;
