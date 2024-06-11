import { ImagePickerAsset } from "expo-image-picker";
import { useFormikContext } from "formik";

import ImageInputList from "../ImageInputList";
import ErrorMessage from "./ErrorMessage";

interface Props {
  name: string;
}

const AppFormImagePicker = ({ name }: Props) => {
  const { setFieldValue, errors, values, touched, setFieldTouched } =
    useFormikContext<{
      [name: string]: ImagePickerAsset[];
    }>();

  const imageAssets = values[name];

  const handleAddImage = (newImageAssets: ImagePickerAsset[]) =>
    setFieldValue(name, [...imageAssets, ...newImageAssets]);

  const handleRemoveImage = (uri: string) => {
    setFieldValue(
      name,
      imageAssets?.filter((imageAsset) => imageAsset.uri !== uri)
    );
  };

  return (
    <>
      <ImageInputList
        imageAssets={imageAssets}
        onAddImage={handleAddImage}
        onRemoveImage={handleRemoveImage}
        // onButtonPress={() => setFieldTouched(name)} setFieldTouched on some event
      />
      <ErrorMessage
        error={errors[name] as string}
        //   visible={!!touched[name]}
        visible={true}
      />
    </>
  );
};

export default AppFormImagePicker;
