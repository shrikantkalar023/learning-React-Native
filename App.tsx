import { View } from "react-native";

import AppText from "./app/components/AppText";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Minima, id.
      </AppText>
    </View>
  );
}
