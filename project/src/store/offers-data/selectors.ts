import { Offer } from '../../types/offer';
import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { Reviews } from '../../types/review';

export const getOffers = (state: State): Offer[] => state[NameSpace.Data].offers;
export const getIsLoading = (state: State): boolean => state[NameSpace.Data].isLoading;
export const getCurrentOffer = (state: State): Offer | null => state[NameSpace.Data].currentOffer;
export const getOffersNearby = (state: State): Offer[] => state[NameSpace.Data].offersNearby;
export const getComments = (state: State): Reviews => state[NameSpace.Data].reviews;
export const getErrorStatus = (state: State): boolean => state[NameSpace.Data].hasError;
