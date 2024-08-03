import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { IListing } from "../interface/listing";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import ListingScreen from "../screens/ListingScreen";

export type FeedNavigatorParams = {
  Listings: undefined;
  ListingDetails: IListing;
};

const Stack = createNativeStackNavigator<FeedNavigatorParams>();
const FeedNavigator = () => (
  <Stack.Navigator
    screenOptions={{ presentation: "modal", headerShown: false }}
  >
    <Stack.Screen name="Listings" component={ListingScreen} />
    <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
  </Stack.Navigator>
);
export default FeedNavigator;
