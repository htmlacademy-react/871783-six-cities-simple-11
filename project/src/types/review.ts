export type Review = {
  id: number;
  user: User;
  rating: number;
  comment: string;
  date: string;
}
export type User = {
  id: number;
  avatarUrl: string;
  name: string;
  isPro: boolean;
}

export type ReviewData = {
  id: number;
  comment: string;
  rating: number;
}

export type Reviews = Review[];
