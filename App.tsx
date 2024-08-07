import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import OfflineNotice from "./app/components/OfflineNotice";
import { IUser } from "./app/interface/user";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import { navigationRef } from "./app/navigation/rootNavigation";
import logger from "./app/utility/logger";

SplashScreen.preventAutoHideAsync();
logger.start();

export default function App() {
  const [user, setUser] = useState<IUser | null>(null);
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    try {
      const user = await authStorage.getUser();
      if (user) setUser(user);
    } catch (error) {
      logger.log("Error restoring token");
      logger.log(error);
    } finally {
      setIsReady(true);
    }
  };

  useEffect(() => {
    restoreUser();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <NavigationContainer theme={navigationTheme} ref={navigationRef}>
        <AuthContext.Provider value={{ user, setUser }}>
          <OfflineNotice />
          {user ? <AppNavigator /> : <AuthNavigator />}
        </AuthContext.Provider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
