import { useFormContext } from "react-hook-form";

import AppButton from "../AppButton";

interface Props {
  title: string;
}

const AppFormSubmitButton = ({ title }: Props) => {
  const { handleSubmit } = useFormContext();
  const onSubmit = handleSubmit((data) => console.log(data));

  return <AppButton title={title} onPress={onSubmit} />;
};

export default AppFormSubmitButton;
