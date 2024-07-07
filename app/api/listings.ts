import { IListing, IPostListing } from "../interface/listing";
import apiClient from "./client";

const endpoint = "/listings";

const listingsApi = {
  getListings: () => apiClient.get<IListing[]>(endpoint),
  addListings: async (listing: IPostListing) => {
    const data = new FormData();

    data.append("title", listing.title);
    data.append("price", listing.price.toString());
    data.append("categoryId", listing.categoryId.toString());

    listing.images.forEach((uri, index) => {
      data.append("images", {
        name: `image${index}`,
        type: "image/jpeg",
        uri,
      } as any);
    });

    listing.description && data.append("description", listing.description);
    listing.location &&
      data.append("location", JSON.stringify(listing.location));

    // console.log("formData:", data);
    return apiClient.post<IListing>(endpoint, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};

export default listingsApi;
