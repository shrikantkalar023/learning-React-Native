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
  <Stack.Navigator>
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen
      name="TweetDetails"
      component={TweetDetails}
      // options={{ title: "Tweet Details" }}
      options={({ route }) => ({ title: route.params.id.toString() })}
    />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
