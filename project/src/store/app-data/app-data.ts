import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const'
import {AppProcess, UserProcess} from '../../types/state';
import {
  fetchOffersAction,
  fetchOfferAction,
  fetchCommentsAction,
  fetchOffersNearbyAction,
  fetchSendCommentAction
} from '../api-actions';
import {Offer} from '../../types/offer';
import {Review} from '../../types/review';
import {SortingType} from '../../types/sort';
import {UserData} from '../../types/user-data';

type State = {
  city: string;
  offers: Offer[];
  currentOffer: Offer | null;
  reviews: Review[];
  sortingType: SortingType;
  userData: UserData;
  isLoading: boolean;
  offersNearby: Offer[];
};

const initialState: AppProcess = {
  city: 'Paris',
  offers: [],
  currentOffer: null,
  reviews: [],
  sortingType: 'Popular',
  // userData: {} as UserData,
  isLoading: false,
  offersNearby: [],
};

export const appData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchOfferAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.currentOffer = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCommentsAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchSendCommentAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSendCommentAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchSendCommentAction.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchOffersNearbyAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOffersNearbyAction.fulfilled, (state, action) => {
        state.offersNearby = action.payload;
        state.isLoading = false;
      });
    }
  }
);

