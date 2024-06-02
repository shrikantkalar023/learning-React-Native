import { GestureHandlerRootView } from "react-native-gesture-handler";
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";
import Screen from "./app/components/Screen";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Screen>
        <AppPicker icon="apps" placeholder="Category" />
        <AppTextInput icon="email" placeholder="Email" />
      </Screen>
    </GestureHandlerRootView>
  );
}
