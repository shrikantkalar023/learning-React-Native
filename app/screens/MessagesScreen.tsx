import { FlatList } from "react-native";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
];

const MessagesScreen = () => {
  return (
    <Screen>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("message selected", item)}
          />
        )}
        keyExtractor={(message) => message.id.toString()}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
};

export default MessagesScreen;
