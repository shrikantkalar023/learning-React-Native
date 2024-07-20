import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlatList, StyleSheet, View } from "react-native";

import useAuth from "../auth/useAuth";
import Icon from "../components/Icon";
import ListItem from "../components/lists/ListItem";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import Screen from "../components/Screen";
import colors from "../config/colors";
import { IconNames } from "../config/iconNames";
import { AccountNavigatorParams } from "../navigation/AccountNavigator";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: "Messages",
  },
];
interface Props
  extends NativeStackScreenProps<AccountNavigatorParams, "AccountScreen"> {}

const AccountScreen = ({ navigation }: Props) => {
  const { user, logOut } = useAuth();
  if (!user) return;

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={user.name}
          subTitle={user.email}
          image={require("../assets/mosh.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              onPress={() => {
                item.targetScreen === "Messages" &&
                  navigation.navigate(item.targetScreen);
              }}
              iconComponent={
                <Icon
                  name={item.icon.name as IconNames}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <ListItem
        title="Log Out"
        iconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        onPress={logOut}
      />
    </Screen>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
});
