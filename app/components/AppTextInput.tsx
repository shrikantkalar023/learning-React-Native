import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Platform,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import colors from "../config/colors";
import { IconNames } from "../config/iconNames";

interface Props extends TextInputProps {
  icon?: IconNames;
}

const AppTextInput = ({ icon, ...textInputProps }: Props) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons name={icon} size={20} color={colors.medium} />
      )}
      <TextInput style={styles.textInput} {...textInputProps} />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    gap: 10,
  },
  textInput: {
    color: colors.dark,
    fontSize: 18,
    width: "100%",
    ...Platform.select({
      ios: {
        fontFamily: "Avenir",
      },
      android: {
        fontFamily: "Roboto",
      },
    }),
  },
});
