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
          shadowColor: "pink", // both for ios and android
          elevation: 5, // for android.
          shadowOffset: {
            // for ios
            height: 10,
            width: 10,
          },
          shadowOpacity: 1, // for ios
          shadowRadius: 5, // for ios
        }}
      ></View>
    </View>
  );
}
