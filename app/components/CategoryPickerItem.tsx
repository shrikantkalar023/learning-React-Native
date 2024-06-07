import { StyleSheet, TouchableOpacity } from "react-native";
import AppText from "./AppText";
import Icon from "./Icon";
import { PickerItemProps } from "./PickerItem";

const CategoryPickerItem = ({ item, onPress }: PickerItemProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {item.icon && (
        <Icon
          name={item.icon}
          backgroundColor={item?.backgroundColor}
          size={80}
        />
      )}
      <AppText style={styles.label}>{item.label}</AppText>
    </TouchableOpacity>
  );
};

export default CategoryPickerItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  label: {
    textAlign: "center",
    marginTop: 5,
  },
});
