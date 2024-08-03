import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";

import listingsApi from "../api/listings";
import ActivityIndicator from "../components/ActivityIndicator";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
import useApi from "../hooks/useApi";
import { FeedNavigatorParams } from "../navigation/FeedNavigator";

interface Props
  extends NativeStackScreenProps<FeedNavigatorParams, "Listings"> {}

const ListingScreen = ({ navigation }: Props) => {
  const {
    data: listings,
    loading,
    request: loadListings,
    error,
  } = useApi(listingsApi.getListings);

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <>
      <ActivityIndicator visible={loading} />
      <Screen style={styles.screen}>
        {error ? (
          <>
            <AppText>Couldn't retrieve the listings.</AppText>
            <AppButton title="Retry" onPress={loadListings} />
          </>
        ) : (
          <FlatList
            data={listings}
            keyExtractor={(listing) => listing.id.toString()}
            renderItem={({ item }) => (
              <Card
                title={item.title}
                subTitle={"$" + item.price}
                imageUrl={item.images[0].url}
                onPress={() => navigation.navigate("ListingDetails", item)}
              />
            )}
          />
        )}
      </Screen>
    </>
  );
};

export default ListingScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
