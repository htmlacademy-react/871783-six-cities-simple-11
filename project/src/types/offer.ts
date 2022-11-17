export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type City = {
  name: string;
  location: Location;
}

export type Host = {
  id: number;
  avatarUrl: string;
  name: string;
  isPro: boolean;
}

export type Offer = {
  id: number;
  isPremium: boolean;
  previewImage: string;
  images: string[];
  price: number;
  rating: number;
  title: string;
  description: string;
  type: string;
  badrooms: number;
  maxAdults: number;
  goods?: string[] | null;
  city: City;
  host: Host;
}

export type Point = Omit<Location, 'zoom'> & {
  id: number;
}

export type Offers = Offer[];
