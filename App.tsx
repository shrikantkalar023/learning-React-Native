import { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AppPicker, { Item } from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";
import Screen from "./app/components/Screen";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  const [category, setCategory] = useState<Item>(categories[1]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Screen>
        <AppPicker
          items={categories}
          icon="apps"
          placeholder="Category"
          selectedItem={category}
          onSelectItem={setCategory}
        />
        <AppTextInput icon="email" placeholder="Email" />
      </Screen>
    </GestureHandlerRootView>
  );
}
