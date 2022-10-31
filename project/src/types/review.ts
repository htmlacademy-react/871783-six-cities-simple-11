export type Review = {
  id: number;
  user: {
    avatar: string;
    name: string;
  };
  rating: number;
  comment: string;
  date: string;
}

export type Reviews = Review[];
