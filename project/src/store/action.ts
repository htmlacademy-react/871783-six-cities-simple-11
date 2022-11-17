import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';
import { SortingType } from '../const';

export const changeCityAction = createAction<string>('changeCity');

export const getOffersAction = createAction<Offer[]>('getOffers');

export const sortCardsAction = createAction<SortingType>('sortCards');
