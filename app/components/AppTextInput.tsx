import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import { IconNames } from "../config/iconNames";
import defaultStyles from "../config/styles";

export interface AppTextInputProps extends TextInputProps {
  icon?: IconNames;
}

const AppTextInput = ({ icon, ...textInputProps }: AppTextInputProps) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
        />
      )}
      <TextInput
        style={[defaultStyles.text, { width: "100%" }]}
        placeholderTextColor={defaultStyles.colors.medium}
        {...textInputProps}
      />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    gap: 10,
  },
});
