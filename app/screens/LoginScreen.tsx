import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { Image, StyleSheet } from "react-native";
import { z } from "zod";
import {
  AppFormField,
  AppFormPicker,
  AppFormSubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Camera", value: 3 },
];

const LoginScreen = () => {
  const schema = z.object({
    email: z
      .string({ required_error: "Email is required." })
      .email({ message: "Invalid email address." }),
    password: z
      .string({ required_error: "Password is required." })
      .min(3, { message: "Password must be at least 3 characters long." }),
    category: z.object(
      {
        label: z.string(),
        value: z.number(),
      },
      { required_error: "Category is required" }
    ),
  });
  type FormData = z.infer<typeof schema>;

  const methods = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <FormProvider {...methods}>
        <AppFormPicker
          name="category"
          placeholder="Category"
          items={categories}
        />
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
