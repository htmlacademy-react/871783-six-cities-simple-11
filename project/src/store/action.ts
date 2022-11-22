import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';
import { SortingType } from '../types/sort';
import { AuthorizationStatus } from '../const';
import { AppRoute } from '../router';
import { Review } from '../types/review';

export const changeCityAction = createAction<string>('changeCity');

export const loadOffersAction = createAction<Offer[]>('getOffers');

export const loadOffersNearbyAction = createAction<Offer[]>('loadNearBy');

export const sortCardsAction = createAction<SortingType>('sortCards');

export const loadCommentsAction = createAction<Review[]>('loadComments');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const redirectToRoute = createAction<AppRoute>('redirectToRoute');

export const setErrorAction = createAction<string | null>('setError');
