import { GestureHandlerRootView } from "react-native-gesture-handler";
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";
import Screen from "./app/components/Screen";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Screen>
        <AppPicker items={categories} icon="apps" placeholder="Category" />
        <AppTextInput icon="email" placeholder="Email" />
      </Screen>
    </GestureHandlerRootView>
  );
}
