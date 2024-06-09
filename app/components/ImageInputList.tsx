import { ImagePickerAsset } from "expo-image-picker";
import { StyleSheet, View } from "react-native";

import ImageInput, { ImageInputProps } from "./ImageInput";

interface Props extends Omit<ImageInputProps, "imageUri"> {
  imageAssets?: ImagePickerAsset[];
}

const ImageInputList = ({ imageAssets, ...ImageInputProps }: Props) => {
  return (
    <View style={styles.container}>
      {imageAssets?.map((imageAsset) => (
        <ImageInput
          key={imageAsset.uri}
          imageUri={imageAsset.uri}
          {...ImageInputProps}
        />
      ))}
      <ImageInput {...ImageInputProps} />
    </View>
  );
};

export default ImageInputList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
  },
});
