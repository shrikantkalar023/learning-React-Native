import { GestureHandlerRootView } from "react-native-gesture-handler";
import AppTextInput from "./app/components/AppTextInput";
import Screen from "./app/components/Screen";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Screen>
        <AppTextInput icon="email" placeholder="First Name" />
      </Screen>
    </GestureHandlerRootView>
  );
}
