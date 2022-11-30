import { store } from '../store';
import { AuthorizationStatus } from '../const';
import {Review} from "./review";
import {SortingType} from "./sort";
import {Offer} from "./offer";

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppProcess = {
  city: string;
  offers: Offer[];
  currentOffer: Offer | null;
  reviews: Review[];
  sortingType: SortingType;
  isLoading: boolean;
  offersNearby: Offer[];
}

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
}
