import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';
import { SortingType } from '../types/sort';
import { AuthorizationStatus } from '../const';
import { AppRoute } from '../router';
import { Review } from '../types/review';
import { UserData } from '../types/user-data';

export const changeCityAction = createAction<string>('changeCity');

export const loadOffersAction = createAction<Offer[]>('offers/getOffers');

export const loadCurrentOfferAction = createAction<Offer>('offer/getOffer');

export const setLoadingStatus = createAction<boolean>('data/setLoadingStatus');

export const setOffersNearbyAction = createAction<Offer[]>('setNearby');

export const sortCardsAction = createAction<SortingType>('sortCards');

export const setCommentsAction = createAction<Review[]>('saveComments');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const getUserData = createAction<UserData>('user/data');

export const redirectToRoute = createAction<AppRoute>('redirectToRoute');
