import { View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "red",
        flex: 1, // takes entire screen. .5 would take half
      }}
    >
      {/* flex: 2 takes 2/4 of the container below */}
      <View style={{ backgroundColor: "blue", flex: 2 }} />
      <View style={{ backgroundColor: "gold", flex: 1 }} />
      <View style={{ backgroundColor: "tomato", flex: 1 }} />
    </View>
  );
}
