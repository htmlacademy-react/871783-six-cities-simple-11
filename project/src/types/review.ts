export type Review = {
  id: number;
  user: {
    id: number;
    avatar: string;
    name: string;
    isPro: boolean;
  };
  rating: number;
  comment: string;
  date: string;
}

export type Reviews = Review[];
