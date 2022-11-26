import { createReducer } from '@reduxjs/toolkit';
import {
  changeCityAction,
  loadOffersAction,
  sortCardsAction,
  requireAuthorization,
  setOffersNearbyAction,
  getUserData,
  setCommentsAction,
  setLoadingStatus
} from './action';
import { Offer } from '../types/offer';
import { SortingType } from '../types/sort';
import { AuthorizationStatus } from '../const';
import { Review } from '../types/review';
import { UserData } from '../types/user-data';

type State = {
  city: string;
  offers: Offer[];
  currentOffer: Offer | null;
  reviews: Review[];
  sortingType: SortingType;
  authorizationStatus: AuthorizationStatus;
  userData: UserData;
  isLoading: boolean;
  isFormLoading: boolean;
  offersNearby: Offer[];
};

const initialState: State = {
  city: 'Paris',
  offers: [],
  currentOffer: null,
  reviews: [],
  sortingType: 'Popular',
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: {} as UserData,
  isLoading: false,
  isFormLoading: false,
  offersNearby: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffersAction, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setLoadingStatus, (state, action) => {
      state.isLoading = action.payload;
    })
    .addCase(setOffersNearbyAction, (state, action) => {
      state.offersNearby = action.payload;
    })
    .addCase(sortCardsAction, (state, action) => {
      state.sortingType = action.payload;
    })
    .addCase(setCommentsAction, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(getUserData, (state, action) => {
      state.userData = action.payload;
    });
});
