import { ReactNode } from "react";
import { Text } from "react-native";

import styles from "./styles";

interface Props {
  children: ReactNode;
}

const AppText = ({ children }: Props) => {
  return <Text style={styles.text}>{children}</Text>;
};

export default AppText;
