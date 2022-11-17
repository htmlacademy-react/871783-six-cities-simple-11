import { createReducer } from '@reduxjs/toolkit';
import {changeCityAction, getOffersAction, sortCardsAction} from './action';
import { Offer } from '../types/offer';
import { SortingType } from '../const';

type State = {
  city: string;
  offers: Offer[];
  sortingType: SortingType;
};

const initialState: State = {
  city: 'Paris',
  offers: [],
  sortingType: SortingType.Popular,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(getOffersAction, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(sortCardsAction, (state, action) => {
      state.sortingType = action.payload;
    });
});
