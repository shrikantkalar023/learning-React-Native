import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import ListingScreen from "../screens/ListingScreen";

export type FeedNavigatorParams = {
  Listings: undefined;
  ListingDetails: { image: number; title: string; price: number }; // image, title, price
};

const Stack = createNativeStackNavigator<FeedNavigatorParams>();
const FeedNavigator = () => (
  <Stack.Navigator screenOptions={{ presentation: "modal" }}>
    <Stack.Screen name="Listings" component={ListingScreen} />
    <Stack.Screen
      name="ListingDetails"
      component={ListingDetailsScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
export default FeedNavigator;
