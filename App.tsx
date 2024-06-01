import { GestureHandlerRootView } from "react-native-gesture-handler";
import ListingScreen from "./app/screens/ListingScreen";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ListingScreen />
    </GestureHandlerRootView>
  );
}
