import { useFormikContext } from "formik";
import AppPicker, { AppPickerItem, AppPickerProps } from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

interface Props extends Omit<AppPickerProps, "onSelectItem" | "selectedItem"> {
  name: string;
}

const AppFormPicker = ({ name, items, ...pickerProps }: Props) => {
  const { setFieldValue, errors, values, touched, setFieldTouched } =
    useFormikContext<{
      [name: string]: AppPickerItem;
    }>();

  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        selectedItem={values[name]}
        onButtonPress={() => setFieldTouched(name)}
        {...pickerProps}
      />
      <ErrorMessage error={errors[name] as string} visible={!!touched[name]} />
    </>
  );
};

export default AppFormPicker;
