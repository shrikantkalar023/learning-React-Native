import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image, StyleSheet, View } from "react-native";

import AppText from "../components/AppText";
import ListItem from "../components/lists/ListItem";
import colors from "../config/colors";
import { FeedNavigatorParams } from "../navigation/FeedNavigator";

interface Props
  extends NativeStackScreenProps<FeedNavigatorParams, "ListingDetails"> {}

const ListingDetailsScreen = ({
  route: {
    params: { imageUrl, price, title },
  },
}: Props) => {
  return (
    <View>
      <Image source={{uri:imageUrl}} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.price}>${price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            title="K Dot"
            subTitle="5 Listings"
            image={require("../assets/mosh.jpg")}
          />
        </View>
      </View>
    </View>
  );
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});
