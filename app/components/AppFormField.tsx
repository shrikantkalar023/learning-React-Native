import { useFormikContext } from "formik";
import AppTextInput, { AppTextInputProps } from "./AppTextInput";
import ErrorMessage from "./ErrorMessage";

interface Props extends AppTextInputProps {
  name: string;
}

const AppFormField = ({ name, ...textInputProps }: Props) => {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext<{
    [name: string]: string;
  }>();

  return (
    <>
      <AppTextInput
        {...textInputProps}
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormField;
