import { ImagePickerAsset } from "expo-image-picker";
import { ScrollView, StyleSheet, View } from "react-native";

import { useRef } from "react";
import ImageInput, { ImageInputProps } from "./ImageInput";

interface Props extends Omit<ImageInputProps, "imageUri"> {
  imageAssets?: ImagePickerAsset[];
}

const ImageInputList = ({ imageAssets, ...ImageInputProps }: Props) => {
  const scrollViewRef = useRef<ScrollView>(null);

  return (
    <View>
      <ScrollView
        horizontal
        ref={scrollViewRef}
        onContentSizeChange={() => scrollViewRef.current?.scrollToEnd()}
      >
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
      </ScrollView>
    </View>
  );
};

export default ImageInputList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
  },
});
