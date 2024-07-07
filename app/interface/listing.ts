export interface IListing extends Omit<IPostListing, "images"> {
  id: number;
  userId: number;
  images: { url: string; thumbnailUrl: string }[];
}

export interface IPostListing {
  title: string;
  images: string[]; // array of uris
  price: string;
  categoryId: number; // string;
  location?: {
    latitude: number;
    longitude: number;
  };
  description?: string;
}
