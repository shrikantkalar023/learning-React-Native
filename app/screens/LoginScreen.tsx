import { Formik } from "formik";
import { Image, StyleSheet } from "react-native";
import { object, string } from "yup";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import ErrorMessage from "../components/ErrorMessage";
import Screen from "../components/Screen";

const validationSchema = object({
  email: string().email().required().label("Email"),
  password: string().min(4).required().label("Password"),
});

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              placeholder="Email"
              textContentType="emailAddress"
              onChangeText={handleChange("email")}
              onBlur={() => setFieldTouched("email")}
            />
            <ErrorMessage error={errors?.email} visible={touched.email} />
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              placeholder="Password"
              secureTextEntry
              textContentType="password"
              onChangeText={handleChange("password")}
              onBlur={() => setFieldTouched("password")}
            />
            <ErrorMessage error={errors?.password} visible={touched.password} />
            <AppButton title="Login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
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
