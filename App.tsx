import { View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1, // takes entire screen. .5 would take half
        flexDirection: "row", // default is column
        justifyContent: "center", // default is flex-start
        alignItems: "center", // default is stretch
      }}
    >
      <View
        style={{
          backgroundColor: "blue",
          width: 100,
          height: 100,
          top: 50, // this is absolute positioning
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          width: 100,
          top: 100,
          left: 50,
          height: 100,
          position: "absolute",
        }}
      />
      <View style={{ backgroundColor: "tomato", width: 100, height: 100 }} />
    </View>
  );
}
