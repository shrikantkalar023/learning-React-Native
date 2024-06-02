import { useState } from "react";
import { Text, TextInput } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Screen from "./app/components/Screen";

export default function App() {
  const [firstName, setFirstName] = useState("");

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Screen>
        <Text>{firstName}</Text>
        <TextInput
          onChangeText={(text) => setFirstName(text)}
          placeholder="first name"
          style={{
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
          }}
        />
      </Screen>
    </GestureHandlerRootView>
  );
}
