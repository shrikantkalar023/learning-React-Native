import {
  Button,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  View,
  Dimensions,
} from "react-native";

export default function App() {
  console.log(Dimensions.get("screen"));

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{ backgroundColor: "dodgerblue", width: "50%", height: 70 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
