import LottieView from "lottie-react-native";

interface Props {
  visible: boolean;
}

const ActivityIndicator = ({ visible }: Props) => {
  if (!visible) return null;

  return (
    <LottieView
      source={require("../assets/animations/loader.json")}
      style={{ width: "100%", height: "100%" }}
      autoPlay
      loop
    />
  );
};

export default ActivityIndicator;
