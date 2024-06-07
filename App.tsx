import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Button, Image } from "react-native";
import Screen from "./app/components/Screen";

export default function App() {
  const [imageUri, setImageUri] = useState<string>();

  const selectImage = async () => {
    // No permissions request is necessary for launching the image library

    try {
      let result = await ImagePicker.launchImageLibraryAsync();

      if (!result.canceled) {
        setImageUri(result.assets[0].uri);
      }
    } catch (error) {
      console.log("Error selecting image", error);
    }
  };

  return (
    <Screen style={{ flex: 1 }}>
      <Button title="Pick an image from camera roll" onPress={selectImage} />
      {imageUri && (
        <Image
          source={{ uri: imageUri }}
          style={{
            width: 200,
            height: 200,
          }}
        />
      )}
    </Screen>
  );
}
