import { SafeAreaView, StyleSheet, Text } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={2} onPress={() => console.log("Text pressed")}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit laborum
        perspiciatis eum voluptate dolore cum quaerat perferendis nemo iure modi
        velit, ad quam laboriosam libero.
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
