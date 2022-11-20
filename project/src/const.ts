export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Offers = '/hotels',
  Reviews = '/comments',
  Login = '/login',
  Logout = '/logout',
}

export const ratings: number[] = [5, 4, 3, 2, 1];

export const MARKER = {
  URL_MARKER_DEFAULT: 'img/pin.svg',
  URL_MARKER_CURRENT: 'img/pin-active.svg',
  MARKER_WIDTH: 27,
  MARKER_HEIGHT: 39,
};

export const cities = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
] as const;
