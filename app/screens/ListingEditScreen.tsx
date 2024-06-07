import { StyleSheet } from "react-native";
import { number, object, string } from "yup";
import {
  AppForm,
  AppFormField,
  AppFormSubmitButton,
} from "../components/forms";
import AppFormPicker from "../components/forms/AppFormPicker";
import Screen from "../components/Screen";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Camera", value: 3 },
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
});

const ListingEditScreen = () => {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
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
