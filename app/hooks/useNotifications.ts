import Constants from "expo-constants";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import { useEffect, useRef } from "react";
import expoPushTokens from "../api/expoPushTokens";

const useNotifications = (
  notificationReceivedListener?: () => void,
  notificationResponseListener?: () => void
) => {
  useEffect(() => {
    registerForPushNotifications();

    // notification received listener
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        notificationReceivedListener && notificationReceivedListener();
      });

    // notification response listener
    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        notificationResponseListener && notificationResponseListener();
        // const route = response.notification.request.content.data.route;
        // navigate(route);
      });

    return () => {
      notificationListener.current &&
        Notifications.removeNotificationSubscription(
          notificationListener.current
        );
      responseListener.current &&
        Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  // notification handler: this handles notification when they come.
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });

  const registerForPushNotifications = async () => {
    let token: string;
    if (!Device.isDevice) return;

    try {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();

      let finalStatus = existingStatus;

      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }

      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }

      try {
        const projectId =
          Constants?.expoConfig?.extra?.eas?.projectId ??
          Constants?.easConfig?.projectId;
        if (!projectId) {
          throw new Error("Project ID not found");
        }
        token = (
          await Notifications.getExpoPushTokenAsync({
            projectId,
          })
        ).data;
        console.log(token);
        expoPushTokens.register(token);
      } catch (e) {
        console.log("Error in inner try-catch block", e);
      }
    } catch (error) {
      console.log("Error getting a push token", error);
    }
  };

  const notificationListener = useRef<Notifications.Subscription>();
  const responseListener = useRef<Notifications.Subscription>();
};

export default useNotifications;
