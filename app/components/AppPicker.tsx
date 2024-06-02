import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import { IconNames } from "../config/iconNames";
import defaultStyles from "../config/styles";
import AppText from "./AppText";

interface Props {
  icon?: IconNames;
  placeholder: string;
}

const AppPicker = ({ icon, placeholder }: Props) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
        />
      )}
      <AppText style={styles.text}>{placeholder}</AppText>
      <MaterialCommunityIcons
        name="chevron-down"
        size={20}
        color={defaultStyles.colors.medium}
      />
    </View>
  );
};

export default AppPicker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    gap: 10,
  },
  text: {
    flex: 1,
  },
});
