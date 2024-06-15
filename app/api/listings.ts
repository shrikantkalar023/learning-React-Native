import apiClient from "./client";

const endpoint = "/listings";

const listingsApi = {
  getListings: () => apiClient.get(endpoint),
};

export default listingsApi;
