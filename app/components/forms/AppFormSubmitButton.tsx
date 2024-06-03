import { useFormikContext } from "formik";
import AppButton from "../AppButton";

interface Props {
  title: string;
}

const AppFormSubmitButton = ({ title }: Props) => {
  const { handleSubmit } = useFormikContext();

  return <AppButton title={title} onPress={handleSubmit} />;
};

export default AppFormSubmitButton;
