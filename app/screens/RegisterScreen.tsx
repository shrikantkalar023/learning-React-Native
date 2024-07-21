import { useState } from "react";
import { StyleSheet } from "react-native";
import { object, string } from "yup";

import authApi from "../api/auth";
import useAuth from "../auth/useAuth";
import {
  AppForm,
  AppFormField,
  AppFormSubmitButton,
  ErrorMessage,
} from "../components/forms";
import Screen from "../components/Screen";
import { IRegisterUser } from "../interface/user";

const validationSchema = object({
  name: string().required().label("Name"),
  email: string().required().email().label("Email"),
  password: string().required().min(4).label("Password"),
});

const RegisterScreen = () => {
  const [registerFailed, setRegisterFailed] = useState(false);
  const [error, setError] = useState<string>();

  const { logIn } = useAuth();

  const handleSubmit = async (user: IRegisterUser) => {
    const response = await authApi.register(user);
    if (!response.ok) {
      setRegisterFailed(true);

      if (response.data) setError(response.data.error);
      else {
        setError("An unexpected error occurred.");
        console.error(response);
      }

      return;
    }

    const loginResponse = await authApi.login({
      email: user.email,
      password: user.password,
    });
    if (!loginResponse.ok || !loginResponse.data)
      return setRegisterFailed(true);

    setRegisterFailed(false);

    logIn(loginResponse.data);
  };

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error={error} visible={registerFailed} />
        <AppFormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
          textContentType="name"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <AppFormSubmitButton title="Register" />
      </AppForm>
    </Screen>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
