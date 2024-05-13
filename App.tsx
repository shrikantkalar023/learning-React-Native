import { Alert, Button, SafeAreaView, StyleSheet } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Button
        title="Click Me"
        onPress={() =>
          Alert.alert("title", "message", [
            { text: "Yes", onPress: () => console.log("Yes Pressed") },
            {
              text: "No",
              onPress: () => console.log("No Pressed"),
            },
          ])
        }
        color="blue"
      />
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "yellow" };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
