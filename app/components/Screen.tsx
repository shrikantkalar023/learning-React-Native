import Constants from "expo-constants";
import React, { ReactNode } from "react";
import { SafeAreaView, StyleSheet } from "react-native";

interface Props {
  children: ReactNode;
  style?: object;
}

const Screen = ({ children, style }: Props) => {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});
