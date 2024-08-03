import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image } from "expo-image";
import { KeyboardAvoidingView, StyleSheet, View } from "react-native";

import AppText from "../components/AppText";
import ContactSellerForm from "../components/ContactSellerForm";
import ListItem from "../components/lists/ListItem";
import colors from "../config/colors";
import { FeedNavigatorParams } from "../navigation/FeedNavigator";

interface Props
  extends NativeStackScreenProps<FeedNavigatorParams, "ListingDetails"> {}

const ListingDetailsScreen = ({ route: { params: listing } }: Props) => {
  return (
    <KeyboardAvoidingView behavior={"position"} keyboardVerticalOffset={80}>
      <Image source={{ uri: listing.images[0].url }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            title="K Dot"
            subTitle="5 Listings"
            image={require("../assets/mosh.jpg")}
          />
        </View>
        <ContactSellerForm listingId={listing.id} />
      </View>
    </KeyboardAvoidingView>
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
