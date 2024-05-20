import { StyleSheet, Image, View } from "react-native";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon} />
      <View style={styles.deleteIcon} />
      <Image source={require("../assets/chair.jpg")} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  closeIcon: {
    width: 50,
    height: 50,
    position: "absolute",
    top: 40,
    left: 30,
    backgroundColor: "#fc5c65",
  },
  deleteIcon: {
    width: 50,
    height: 50,
    position: "absolute",
    top: 40,
    right: 30,
    backgroundColor: "#4ecdc4",
  },
});

export default ViewImageScreen;
