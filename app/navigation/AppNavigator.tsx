import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AccountScreen from "../screens/AccountScreen";
import ListingEditScreen from "../screens/ListingEditScreen";
import ListingScreen from "../screens/ListingScreen";

export type AppTabParamList = {
  Listings: undefined;
  ListingEdit: undefined;
  Account: undefined;
};

const Tab = createBottomTabNavigator<AppTabParamList>();
const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Listings" component={ListingScreen}></Tab.Screen>
    <Tab.Screen name="ListingEdit" component={ListingEditScreen}></Tab.Screen>
    <Tab.Screen name="Account" component={AccountScreen}></Tab.Screen>
  </Tab.Navigator>
);

export default AppNavigator;
