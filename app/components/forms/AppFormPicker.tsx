import { Controller, useFormContext } from "react-hook-form";
import AppPicker, { AppPickerProps } from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

interface Props extends Omit<AppPickerProps, "onSelectItem" | "selectedItem"> {
  name: string;
}

const AppFormPicker = ({ name, ...pickerProps }: Props) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <AppPicker
            onSelectItem={(item) => onChange(item)}
            selectedItem={value}
            {...pickerProps}
          />
        )}
        name={name}
      />
      <ErrorMessage error={errors[name]?.message as string} />
    </>
  );
};

export default AppFormPicker;
