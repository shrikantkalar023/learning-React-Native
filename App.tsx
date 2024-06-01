import { GestureHandlerRootView } from "react-native-gesture-handler";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import ListItemDeleteAction from "./app/components/ListItemDeleteAction";
import Screen from "./app/components/Screen";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Screen>
        <ListItem
          title={"title"}
          subTitle="subTitle"
          image={<Icon name="format-list-bulleted" />}
          onPress={() => console.log("list item pressed")}
          renderRightActions={() => (
            <ListItemDeleteAction
              onPress={() => console.log("delete action")}
            />
          )}
        />
      </Screen>
    </GestureHandlerRootView>
  );
}
