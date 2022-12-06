import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { OffersData } from '../../types/state';
import {
  fetchOffersAction,
  fetchOfferAction,
  fetchCommentsAction,
  fetchOffersNearbyAction,
  fetchSendCommentAction
} from '../api-actions';

const initialState: OffersData = {
  offers: [],
  currentOffer: null,
  reviews: [],
  offersNearby: [],
  isLoading: false,
  hasError: false,
};

export const offersData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
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
        state.isLoading = false;
        state.reviews = action.payload;
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
      })
      .addCase(fetchOffersNearbyAction.rejected, (state) => {
        state.isLoading = false;
      });
  }
});

