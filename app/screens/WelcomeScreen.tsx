import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";
import { AuthStackParamList } from "../navigation/AuthNavigator";

interface Props extends NativeStackScreenProps<AuthStackParamList, "Welcome"> {}

const WelcomeScreen = ({ navigation }: Props) => {
  return (
    <ImageBackground
      blurRadius={10}
      source={require("../assets/background.jpg")}
      resizeMode="cover"
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="login" onPress={() => navigation.navigate("Login")} />
        <AppButton
          title="register"
          onPress={() => navigation.navigate("Register")}
          color="secondary"
        />
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logo: {
    height: 100,
    width: 100,
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    marginVertical: 20,
  },
  buttonContainer: {
    width: "100%",
    padding: 20,
  },
});
