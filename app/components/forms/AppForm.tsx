import { Formik, FormikConfig } from "formik";
import { ReactNode } from "react";

interface AppFormProps<T> extends Omit<FormikConfig<T>, "children"> {
  children: ReactNode;
}

const AppForm = <T extends {}>({
  children,
  ...formikProps
}: AppFormProps<T>) => {
  return <Formik<T> {...formikProps}>{() => <>{children}</>}</Formik>;
};

export default AppForm;
