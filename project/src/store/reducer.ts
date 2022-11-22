import { createReducer } from '@reduxjs/toolkit';
import {
  changeCityAction,
  loadOffersAction,
  sortCardsAction,
  requireAuthorization,
  loadOffersNearbyAction,
  loadCommentsAction,
  setErrorAction
} from './action';
import { Offer } from '../types/offer';
import { SortingType } from '../types/sort';
import { AuthorizationStatus } from '../const';
import {Review} from '../types/review';

type State = {
  city: string;
  offers: Offer[];
  currentOffer: Offer | null;
  reviews: Review[];
  sortingType: SortingType;
  authorizationStatus: AuthorizationStatus;
  isDataLoading: boolean;
  error: string | null;
};

const initialState: State = {
  city: 'Paris',
  offers: [],
  currentOffer: null,
  reviews: [],
  sortingType: 'Popular',
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoading: false,
  error: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffersAction, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadOffersNearbyAction, (state, action) => {

    })
    .addCase(sortCardsAction, (state, action) => {
      state.sortingType = action.payload;
    })
    .addCase(loadCommentsAction, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setErrorAction, (state, action) => {
      state.error = action.payload;
    });
});
