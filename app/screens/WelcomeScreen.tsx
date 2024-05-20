import { View, Image, ImageBackground, StyleSheet, Text } from "react-native";
import colors from "../config/colors";

const WelcomeScreen = () => {
  return (
    <>
      <ImageBackground
        source={require("../assets/background.jpg")}
        resizeMode="cover"
        style={styles.background}
      >
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/logo-red.png")}
            style={styles.logo}
          />
          <Text>Sell What You Don't Need</Text>
        </View>
        <View style={[styles.button, { backgroundColor: colors.primary }]} />
        <View
          style={[styles.button, , { backgroundColor: colors.secondary }]}
        />
      </ImageBackground>
    </>
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
  button: {
    width: "100%",
    height: 70,
  },
});
