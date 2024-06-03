import { StyleSheet } from "react-native";
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
    color: "red",
  },
});
