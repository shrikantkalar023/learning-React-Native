import { NavigationContainer } from "@react-navigation/native";
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
  const [user, setUser] = useState<IUser | null>(null);

  const restoreToken = async () => {
    const token = await authStorage.getToken();
    if (!token) return;

    setUser(jwtDecode(token));
  };

  useEffect(() => {
    restoreToken();
  }, []);

  return (
    <NavigationContainer theme={navigationTheme}>
      <GestureHandlerRootView>
        <AuthContext.Provider value={{ user, setUser }}>
          <OfflineNotice />
          {user ? <AppNavigator /> : <AuthNavigator />}
        </AuthContext.Provider>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}
