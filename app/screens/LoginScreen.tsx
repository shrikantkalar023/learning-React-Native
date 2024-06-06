import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Image, StyleSheet } from "react-native";
import { z } from "zod";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";

const LoginScreen = () => {
  const schema = z.object({
    email: z
      .string({ required_error: "Email is required." })
      .email({ message: "Invalid email addrerss." }),
    password: z
      .string({ required_error: "Password is required." })
      .min(3, { message: "Password must be at least 3 characters long." }),
  });

  type FormData = z.infer<typeof schema>;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <AppTextInput
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            placeholder="Email"
            textContentType="emailAddress"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
      />
      {errors.email && <AppText>{errors.email.message}</AppText>}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <AppTextInput
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
      />
      {errors.password && <AppText>{errors.password.message}</AppText>}
      <AppButton title="Login" onPress={onSubmit} />
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
