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
      {/* flex: 2 takes 2/4 of the container below */}
      <View
        style={{
          backgroundColor: "blue",
          width: 100,
          height: 100,
          alignSelf: "flex-start", // to align children of flex container
        }}
      />
      <View style={{ backgroundColor: "gold", width: 100, height: 100 }} />
      <View style={{ backgroundColor: "tomato", width: 100, height: 100 }} />
    </View>
  );
}
