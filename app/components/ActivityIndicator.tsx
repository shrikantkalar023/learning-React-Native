import LottieView from "lottie-react-native";
import { StyleSheet } from "react-native";

interface Props {
  visible: boolean;
}

const ActivityIndicator = ({ visible }: Props) => {
  if (!visible) return null;

  return (
    <LottieView
      source={require("../assets/animations/loader.json")}
      style={styles.overlay}
      autoPlay
      loop
    />
  );
};

export default ActivityIndicator;

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    zIndex: 1,
    backgroundColor: "white",
    opacity: 0.8,
    height: "100%",
    width: "100%",
  },
});
