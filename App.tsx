import { useState } from "react";
import { Switch, Text } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Screen from "./app/components/Screen";

export default function App() {
  const [isNew, setIsNew] = useState(false);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Screen>
        <Switch
          value={isNew}
          onValueChange={(newValue) => setIsNew(newValue)}
        />
        <Text>{isNew ? "true" : "false"}</Text>
      </Screen>
    </GestureHandlerRootView>
  );
}
