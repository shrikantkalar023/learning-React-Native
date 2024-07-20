import { useState } from "react";
import { Image, StyleSheet } from "react-native";
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
import { IPostUser } from "../interface/user";

const validationSchema = object({
  email: string().email().required().label("Email"),
  password: string().min(4).required().label("Password"),
});

const LoginScreen = () => {
  const { logIn } = useAuth();

  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }: IPostUser) => {
    const response = await authApi.login(email, password);
    if (!response.ok || !response.data) return setLoginFailed(true);

    setLoginFailed(false);

    logIn(response.data);
  };

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="email"
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          name="password"
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <ErrorMessage
          error={"Invalid email and/or password."}
          visible={loginFailed}
        />
        <AppFormSubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    height: 80,
    width: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
