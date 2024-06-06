import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { Image, StyleSheet } from "react-native";
import { z } from "zod";
import AppFormField from "../components/AppFormField";
import AppFormSubmitButton from "../components/AppFormSubmitButton";
import Screen from "../components/Screen";

const LoginScreen = () => {
  const schema = z.object({
    email: z
      .string({ required_error: "Email is required." })
      .email({ message: "Invalid email address." }),
    password: z
      .string({ required_error: "Password is required." })
      .min(3, { message: "Password must be at least 3 characters long." }),
  });
  type FormData = z.infer<typeof schema>;

  const methods = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <FormProvider {...methods}>
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          placeholder="Email"
          textContentType="emailAddress"
          name="email"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
          name="password"
        />
        <AppFormSubmitButton title="Login" />
      </FormProvider>
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
