import { GestureHandlerRootView } from "react-native-gesture-handler";
import RegisterScreen from "./app/screens/RegisterScreen";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <RegisterScreen />
    </GestureHandlerRootView>
  );
}
