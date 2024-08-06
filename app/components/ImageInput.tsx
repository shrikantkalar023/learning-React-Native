import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import {
  Alert,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import colors from "../config/colors";
import logger from "../utility/logger";

export interface ImageInputProps {
  imageUri?: string;
  onAddImage: (imageAssets: ImagePicker.ImagePickerAsset[]) => void;
  onRemoveImage: (uri: string) => void;
}

const ImageInput = ({
  imageUri: uri,
  onAddImage,
  onRemoveImage,
}: ImageInputProps) => {
  const selectImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsMultipleSelection: true,
      });

      if (!result.canceled) {
        onAddImage(result.assets);
      }
    } catch (error) {
      logger.log("Error selecting image");
      logger.log(error);
    }
  };

  const imagePress = (imageUri: string) => {
    Alert.alert("Delete", "Are you sure you want to delete this image?", [
      {
        text: "Yes",
        onPress: () => {
          onRemoveImage(imageUri);
        },
      },
      { text: "No" },
    ]);
  };

  return (
    <TouchableWithoutFeedback
      onPress={uri ? () => imagePress(uri) : selectImage}
    >
      <View style={styles.container}>
        {uri ? (
          <Image source={{ uri }} style={styles.image} />
        ) : (
          <MaterialCommunityIcons
            name={"camera"}
            size={40}
            color={colors.medium}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ImageInput;

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    borderRadius: 15,
    backgroundColor: colors.light,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  image: { width: "100%", height: "100%" },
});
