import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import OfflineNotice from "./app/components/OfflineNotice";
import { IUser } from "./app/interface/user";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";

export default function App() {
  SplashScreen.preventAutoHideAsync();

  const [user, setUser] = useState<IUser | null>(null);
  const [isReady, setIsReady] = useState(false);

  const restoreToken = async () => {
    try {
      const token = await authStorage.getToken();
      if (token) setUser(jwtDecode(token));
    } catch (error) {
      console.log("Error restoring token", error);
    } finally {
      setIsReady(true);
      await SplashScreen.hideAsync();
    }
  };

  useEffect(() => {
    restoreToken();
  }, []);

  if (!isReady) return null;

  return (
    <NavigationContainer theme={navigationTheme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <AuthContext.Provider value={{ user, setUser }}>
          <OfflineNotice />
          {user ? <AppNavigator /> : <AuthNavigator />}
        </AuthContext.Provider>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}
