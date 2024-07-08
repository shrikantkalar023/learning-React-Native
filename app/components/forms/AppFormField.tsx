import { useFormikContext } from "formik";
import AppTextInput, { AppTextInputProps } from "../AppTextInput";
import ErrorMessage from "../forms/ErrorMessage";

interface Props extends AppTextInputProps {
  name: string;
}

const AppFormField = ({ name, ...textInputProps }: Props) => {
  const { setFieldTouched, values, setFieldValue, errors, touched } =
    useFormikContext<{
      [name: string]: string;
    }>();

  return (
    <>
      <AppTextInput
        {...textInputProps}
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormField;
