import { createNavigationContainerRef } from "@react-navigation/native";
import logger from "../utility/logger";
import { AppNavigatorParams } from "./AppNavigator";

export const navigationRef = createNavigationContainerRef<AppNavigatorParams>();

export const navigate = (name: keyof AppNavigatorParams): void => {
  if (navigationRef.isReady()) {
    // not adding params bsc we are not using them in app navigator
    navigationRef.navigate(name);
  } else {
    logger.log("Navigation not ready");
  }
};
