import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../router';

export const redirectToRoute = createAction<AppRoute>('redirectToRoute');
