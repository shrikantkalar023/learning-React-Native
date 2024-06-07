import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AppPickerItem } from "./AppPicker";
import AppText from "./AppText";

export interface PickerItemProps {
  item: AppPickerItem;
  onPress: () => void;
}

const PickerItem = ({ item, onPress }: PickerItemProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  );
};

export default PickerItem;

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});
