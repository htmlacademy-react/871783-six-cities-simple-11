export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type City = {
  name: string;
  location: Location;
}

export type Offer = {
  id: number;
  isPremium: boolean;
  'previewImage': string;
  images: string[];
  price: number;
  rating: number;
  title: string;
  type: string;
  badrooms: number;
  maxAdults: number;
  insideItems: string[];
  city: City;
}

export type Offers = Offer[];
