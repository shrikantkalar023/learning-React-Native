import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import listingsApi from "../api/listings";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
import IListing from "../interface/listing";
import { FeedNavigatorParams } from "../navigation/FeedNavigator";

interface Props
  extends NativeStackScreenProps<FeedNavigatorParams, "Listings"> {}

const ListingScreen = ({ navigation }: Props) => {
  const [listings, setListings] = useState<IListing[]>([]);

  const loadListings = async () => {
    const response = await listingsApi.getListings();
    response.data && setListings(response.data);
  };

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() =>
              navigation.navigate("ListingDetails", {
                title: item.title,
                price: item.price,
                imageUrl: item.images[0].url,
              })
            }
          />
        )}
      />
    </Screen>
  );
};

export default ListingScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
