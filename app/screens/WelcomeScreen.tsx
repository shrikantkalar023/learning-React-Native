import { View, Image, ImageBackground, StyleSheet, Text } from "react-native";

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
        <View style={[styles.button, { backgroundColor: "red" }]} />
        <View style={[styles.button, , { backgroundColor: "dodgerblue" }]} />
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
