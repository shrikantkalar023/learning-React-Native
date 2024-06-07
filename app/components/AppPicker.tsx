import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Button,
  DimensionValue,
  FlatList,
  Modal,
  StyleSheet,
  View,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { IconNames } from "../config/iconNames";
import defaultStyles from "../config/styles";
import AppText from "./AppText";
import PickerItem from "./PickerItem";
import Screen from "./Screen";

export interface AppPickerItem {
  label: string;
  value: number;
}

export interface AppPickerProps {
  icon?: IconNames;
  placeholder: string;
  items: AppPickerItem[];
  selectedItem?: AppPickerItem;
  onSelectItem?: (item: AppPickerItem) => void;
  onButtonPress?: () => void;
  width?: DimensionValue;
}

const AppPicker = ({
  icon,
  placeholder,
  items,
  selectedItem,
  onSelectItem,
  onButtonPress,
  width,
}: AppPickerProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => {
          setModalVisible(true);
          onButtonPress?.();
        }}
      >
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
            />
          )}
          <AppText
            style={[
              styles.text,
              !selectedItem && { color: defaultStyles.colors.medium },
            ]}
          >
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem && onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
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
