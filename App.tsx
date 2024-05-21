import { View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: "red",
          borderColor: "black",
          borderWidth: 5,
          borderRadius: 50, // at least 50% of width and height to make it a circle
          borderTopEndRadius: 10,
          borderTopStartRadius: 10,
        }}
      ></View>
    </View>
  );
}
