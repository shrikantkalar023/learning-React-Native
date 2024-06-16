import IListing from "../interface/listing";
import apiClient from "./client";

const endpoint = "/listings";

const listingsApi = {
  getListings: () => apiClient.get<IListing[]>(endpoint),
};

export default listingsApi;
