import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={2} onPress={() => console.log("Text pressed")}>
        Hello, World!
      </Text>
      {/* <Image source={require("./assets/splash.png")} /> */}
      <TouchableNativeFeedback onPress={() => console.log("Image pressed")}>
        {/* <Image
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        /> */}
        <View
          style={{ width: 100, height: 100, backgroundColor: "dodgerblue" }}
        ></View>
      </TouchableNativeFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
