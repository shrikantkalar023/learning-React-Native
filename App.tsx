import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import AppNavigator from "./app/navigation/AppNavigator";
import navigationTheme from "./app/navigation/navigationTheme";

export default function App() {
  const asyncStorageDemo = async () => {
    try {
      await AsyncStorage.setItem(
        "person",
        JSON.stringify({ id: 1, name: "John" })
      );

      const value = await AsyncStorage.getItem("person");
      const person = JSON.parse(value as string);

      console.log(person);
    } catch (error) {
      console.log(error);
    }
  };
  asyncStorageDemo();

  return (
    <NavigationContainer theme={navigationTheme}>
      <GestureHandlerRootView>
        <AppNavigator />
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}
