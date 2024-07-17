import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import OfflineNotice from "./app/components/OfflineNotice";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <GestureHandlerRootView>
        <OfflineNotice />
        {/* <AppNavigator /> */}
        <AuthNavigator />
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}
