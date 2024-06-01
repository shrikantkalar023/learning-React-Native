import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import { IconNames } from "../config/iconNames";

interface Props {
  name: IconNames;
  size?: number;
  iconColor?: string;
  backgroundColor?: string;
}

const Icon = ({
  name,
  size = 40,
  iconColor = "#fff",
  backgroundColor = "#000",
}: Props) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor,
      height: size,
      width: size,
      borderRadius: size / 2,
      justifyContent: "center",
      alignItems: "center",
    },
  });

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name={name} size={size / 2} color={iconColor} />
    </View>
  );
};

export default Icon;
