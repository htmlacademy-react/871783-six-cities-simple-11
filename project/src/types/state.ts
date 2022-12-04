import { store } from '../store';
import { AuthorizationStatus } from '../const';
import { Review } from './review';
import { SortingType } from './sort';
import { Offer } from './offer';
import { UserData } from './user-data';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData;
  isLoading: boolean;
}

export type OffersProcess = {
  city: string;
  sortingType: SortingType;
}

export type OffersData = {
  offers: Offer[];
  currentOffer: Offer | null;
  reviews: Review[];
  offersNearby: Offer[];
  isLoading: boolean;
  hasError: boolean;
}
