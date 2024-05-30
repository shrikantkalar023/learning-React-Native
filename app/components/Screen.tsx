import Constants from "expo-constants";
import React, { ReactNode } from "react";
import { SafeAreaView, StyleSheet } from "react-native";

interface Props {
  children: ReactNode;
}

const Screen = ({ children }: Props) => {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
  },
});
