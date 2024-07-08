import { useNetInfo } from "@react-native-community/netinfo";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import AppNavigator from "./app/navigation/AppNavigator";
import navigationTheme from "./app/navigation/navigationTheme";

export default async function App() {
  const netInfo = useNetInfo();
  console.log(netInfo);

  return (
    <NavigationContainer theme={navigationTheme}>
      <GestureHandlerRootView>
        <AppNavigator />
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}
