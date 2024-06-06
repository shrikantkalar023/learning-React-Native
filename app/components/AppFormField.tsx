import { Controller, useFormContext } from "react-hook-form";
import AppTextInput, { AppTextInputProps } from "./AppTextInput";
import ErrorMessage from "./ErrorMessage";

interface Props extends AppTextInputProps {
  name: string;
}

const AppFormField = ({ name, ...textInputProps }: Props) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <AppTextInput
            {...textInputProps}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name={name}
      />
      <ErrorMessage error={errors[name]?.message as string} />
    </>
  );
};

export default AppFormField;
