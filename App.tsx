import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  NavigationProp,
  useNavigation,
} from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { Button, Text } from "react-native";

import Screen from "./app/components/Screen";

type RootStackParamList = {
  Tweets: undefined;
  TweetDetails: { id: number };
  Feed: undefined;
  Account: undefined;
};

const Link = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <Button
      title="View Tweet"
      onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
    />
  );
};

const Tweets = () => {
  return (
    <Screen>
      <Text>Tweets</Text>
      <Link />
    </Screen>
  );
};

interface TweetDetailsProps
  extends NativeStackScreenProps<RootStackParamList, "TweetDetails"> {}

const TweetDetails = ({ route, navigation }: TweetDetailsProps) => (
  <Screen>
    <Text>Tweet Details {route.params.id}</Text>
  </Screen>
);

const Stack = createNativeStackNavigator<RootStackParamList>();
const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "dodgerblue" },
      headerTintColor: "white",
    }}
  >
    <Stack.Screen
      name="Tweets"
      component={Tweets}
      options={{
        headerStyle: { backgroundColor: "tomato" },
        headerTintColor: "white",
      }}
    />
    <Stack.Screen
      name="TweetDetails"
      component={TweetDetails}
      options={({ route }) => ({ title: route.params.id.toString() })}
    />
  </Stack.Navigator>
);

const Account = () => (
  <Screen>
    <Text>Account</Text>
  </Screen>
);

const Tab = createBottomTabNavigator<RootStackParamList>();
const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={Tweets}></Tab.Screen>
    <Tab.Screen name="Account" component={Account}></Tab.Screen>
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <TabNavigator />
    </NavigationContainer>
  );
}
