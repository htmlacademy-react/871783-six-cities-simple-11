import { DEFAULT_CITY, DEFAULT_SORT, NameSpace } from '../../const';
import { OffersProcess } from '../../types/state';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SortingType } from '../../types/sort';

const initialState: OffersProcess = {
  city: DEFAULT_CITY,
  sortingType: DEFAULT_SORT,
};

export const offersProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    sortCards: (state, action: PayloadAction<SortingType>) => {
      state.sortingType = action.payload;
    }
  }
});

export const { changeCity, sortCards } = offersProcess.actions;
