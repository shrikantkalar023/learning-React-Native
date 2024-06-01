import Constants from "expo-constants";
import React, { ReactNode } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

interface Props {
  children: ReactNode;
  style?: object;
}

const Screen = ({ children, style }: Props) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      {/* NOTE: this can lead to unexpected issues if not used carefully. */}
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});
