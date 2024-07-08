import { StyleSheet } from "react-native";
import { array, number, object, string } from "yup";

import listingsApi from "../api/listings";
import { AppPickerItem } from "../components/AppPicker";
import CategoryPickerItem from "../components/CategoryPickerItem";
import {
  AppForm,
  AppFormField,
  AppFormSubmitButton,
} from "../components/forms";
import AppFormImagePicker from "../components/forms/AppFormImagePicker";
import AppFormPicker from "../components/forms/AppFormPicker";
import Screen from "../components/Screen";
import useLocation from "../hooks/useLocation";
import { IPostListing } from "../interface/listing";

const categories: AppPickerItem[] = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Cameras",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Games",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies & Music",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    value: 9,
  },
];

const validationSchema = object({
  title: string().required().min(1).label("Title"),
  price: number().required().min(1).max(10_000).label("Price"),
  description: string().label("Description"),
  category: object({
    label: string().required(),
    value: number().required().min(1),
  })
    .required()
    .label("Category"),
  images: array().min(1, "Please select at least one image."),
});

const ListingEditScreen = () => {
  const location = useLocation();

  const handleSubmit = async (listing: IPostListing) => {
    const response = await listingsApi.addListings(
      location ? { ...listing, location } : listing
    );

    if (!response.ok) return alert("Could not save the listing");

    alert("Success");
  };

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={(
          values: Omit<IPostListing, "categoryId" | "images"> & {
            category: {
              label: string;
              value: number;
            } | null;
            images: { uri: string }[];
          },
          { resetForm }
        ) => {
          const { category, ...rest } = values;
          handleSubmit({
            ...rest,
            categoryId: values.category?.value as number,
            images: values.images.map((image) => image.uri),
          });
          resetForm();
        }}
        validationSchema={validationSchema}
      >
        <AppFormImagePicker name="images" />
        <AppFormField name="title" placeholder="Title" maxLength={255} />
        <AppFormField
          name="price"
          placeholder="Price"
          autoCapitalize="none"
          keyboardType="number-pad"
          maxLength={8}
          width={120}
        />
        <AppFormPicker
          name="category"
          placeholder="Category"
          items={categories}
          width={"50%"}
          PickerItemComponent={CategoryPickerItem}
          numberOfColumns={3}
        />
        <AppFormField
          name="description"
          placeholder="Description"
          multiline
          numberOfLines={3}
          maxLength={255}
        />
        <AppFormSubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
};

export default ListingEditScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
