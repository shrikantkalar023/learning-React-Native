import { ImagePickerAsset } from "expo-image-picker";
import { useState } from "react";
import ImageInputList from "./app/components/ImageInputList";
import Screen from "./app/components/Screen";

export default function App() {
  const [imageAssets, setImageAssets] = useState<ImagePickerAsset[]>([]);

  const handleAddImage = (newImageAssets: ImagePickerAsset[]) =>
    setImageAssets([...imageAssets, ...newImageAssets]);

  const handleRemoveImage = (uri: string) => {
    setImageAssets(imageAssets?.filter((imageAsset) => imageAsset.uri !== uri));
  };

  return (
    <Screen>
      <ImageInputList
        imageAssets={imageAssets}
        onAddImage={handleAddImage}
        onRemoveImage={handleRemoveImage}
      />
    </Screen>
  );
}
