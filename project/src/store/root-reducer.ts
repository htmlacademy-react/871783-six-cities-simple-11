import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { offersData } from './offers-data/offers-data';
import { userProcess } from './user-process/user-process';
import { offersProcess } from './offers-process/offers-process';

export const rootReducer = combineReducers({
  [NameSpace.Data]: offersData.reducer,
  [NameSpace.Offers]: offersProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
});
