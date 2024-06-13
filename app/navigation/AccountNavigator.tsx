import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountScreen from "../screens/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";

export type AccountNavigatorParams = {
  AccountScreen: undefined;
  Messages: undefined;
};

const Stack = createNativeStackNavigator<AccountNavigatorParams>();
const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="AccountScreen" component={AccountScreen} />
    <Stack.Screen name="Messages" component={MessagesScreen} />
  </Stack.Navigator>
);
export default AccountNavigator;
