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
      {/* flexBasis: 100 is same as width: 100 below */}
      <View
        style={{
          backgroundColor: "blue",
          flexBasis: 100,
          flexGrow: 1, // same as setting flex: 1
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          width: 400,
          height: 100,
          flexShrink: 1, // same as setting flex: -1
        }}
      />
      <View style={{ backgroundColor: "tomato", width: 100, height: 100 }} />
    </View>
  );
}
