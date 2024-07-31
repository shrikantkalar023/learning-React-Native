import * as Notifications from "expo-notifications";
import { Button } from "react-native";
import Screen from "./app/components/Screen";

export default function App() {
  // handler for notifications
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    }),
  });

  const showNotification = async () => {
    // scheduling a local notification
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "You've got mail! 📬",
        body: "Here is the notification body",
        data: { data: "goes here", test: { test1: "more data" } },
      },
      trigger: { seconds: 2 },
    });
  };

  return (
    <Screen>
      <Button title="Press me" onPress={showNotification} />
    </Screen>
  );
}
