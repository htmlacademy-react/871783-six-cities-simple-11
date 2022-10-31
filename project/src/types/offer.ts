export type Offer = {
  id: number;
  isPremium: boolean;
  image: string;
  price: number;
  rating: number;
  title: string;
  type: string;
  badrooms: number;
  maxAdults: number;
  'insideItems': string[];
  city: {
    name: string;
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
  };
}

export type Offers = Offer[];
