import * as Notifications from "expo-notifications";
import { FormikHelpers } from "formik";
import { Alert } from "react-native";
import { object, string } from "yup";

import messagesApi from "../api/messages";
import { AppForm, AppFormField, AppFormSubmitButton } from "./forms";

interface Props {
  listingId: number;
}

const validationSchema = object({
  message: string().min(4).required().label("Message"),
});

const ContactSellerForm = ({ listingId }: Props) => {
  const handleSubmit: (
    values: {
      message: string;
    },
    formikHelpers: FormikHelpers<{
      message: string;
    }>
  ) => void = async ({ message }, { resetForm }) => {
    const result = await messagesApi.send({ message, listingId });

    // if error alert user & return
    if (!result.ok) {
      return Alert.alert("Error", "Could not send the message to the seller.");
    }

    resetForm();
    // if success show notification

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Awesome!",
        body: "Your message was sent to the seller.",
      },
      trigger: null,
    });
  };

  return (
    <AppForm
      initialValues={{ message: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <AppFormField name="message" placeholder="Message..." />
      <AppFormSubmitButton title="Contact seller" />
    </AppForm>
  );
};

export default ContactSellerForm;
