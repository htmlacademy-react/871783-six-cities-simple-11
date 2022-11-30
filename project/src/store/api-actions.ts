import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { Offer } from '../types/offer';
import {
  loadOffersAction,
  setOffersNearbyAction,
  redirectToRoute,
  setCommentsAction,
  loadCurrentOfferAction, getUserData,
} from './action';
import { saveToken, dropToken } from '../services/token';
import {
  APIRoute,
} from '../const';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { AppRoute } from '../router';
import {ReviewData, Reviews} from '../types/review';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer[]>(APIRoute.Offers);

    dispatch(loadOffersAction(data));
  },
);

export const fetchOfferAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchCurrentOffer',
  async (id, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Offer>(`${APIRoute.Offers}/${id}`);
      dispatch(loadCurrentOfferAction(data));
    }
    catch {
      dispatch(redirectToRoute(AppRoute.NotFound));
    }
  },
);

export const fetchOffersNearbyAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchNearbyOffers',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer[]>(`${APIRoute.Offers}/${id}/nearby`);
    dispatch(setOffersNearbyAction(data));
  }
);

export const fetchCommentsAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/fetchComments',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<Reviews>(`${APIRoute.Reviews}/${id}`);
    dispatch(setCommentsAction(data));
  },
);

export const fetchSendCommentAction = createAsyncThunk<void, ReviewData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchComment',
  async ({id, comment, rating}, {dispatch, extra: api}) => {
    await api.post(`${APIRoute.Reviews}/${id}`, {comment, rating});
    dispatch(fetchCommentsAction(Number(id)));
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    await api.get(APIRoute.Login);
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}, data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(getUserData(data));
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);
