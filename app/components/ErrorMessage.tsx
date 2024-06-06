import { StyleSheet } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

interface Props {
  error?: string;
}

const ErrorMessage = ({ error }: Props) => {
  if (!error) return null;

  return <AppText style={styles.error}>{error}</AppText>;
};

export default ErrorMessage;

const styles = StyleSheet.create({
  error: {
    color: colors.danger,
  },
});
