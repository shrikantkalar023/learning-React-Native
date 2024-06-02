import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AppText from "./AppText";

interface Props {
  label: string;
  onPress: () => void;
}

const PickerItem = ({ label, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{label}</AppText>
    </TouchableOpacity>
  );
};

export default PickerItem;

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});
