import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ListingEditScreen from "../screens/ListingEditScreen";
import AccountNavigator from "./AccountNavigator";
import FeedNavigator from "./FeedNavigator";

export type AppNavigatorParams = {
  Feed: undefined;
  ListingEdit: undefined;
  Account: undefined;
};

const Tab = createBottomTabNavigator<AppNavigatorParams>();
const AppNavigator = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name="Feed" component={FeedNavigator}></Tab.Screen>
    <Tab.Screen name="ListingEdit" component={ListingEditScreen}></Tab.Screen>
    <Tab.Screen name="Account" component={AccountNavigator}></Tab.Screen>
  </Tab.Navigator>
);

export default AppNavigator;
