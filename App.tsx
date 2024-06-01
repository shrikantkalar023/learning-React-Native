import { GestureHandlerRootView } from "react-native-gesture-handler";
import Icon from "./app/components/Icon";
import Screen from "./app/components/Screen";
import colors from "./app/config/colors";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Screen>
        <Icon
          name="email"
          size={50}
          iconColor={colors.white}
          backgroundColor={colors.primary}
        />
      </Screen>
    </GestureHandlerRootView>
  );
}
