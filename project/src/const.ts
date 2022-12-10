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

export const DEFAULT_SORT = 'Popular';

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

export const DEFAULT_CITY = cities[0];

export const randomCities = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
];

export enum NameSpace {
  Offers = 'OFFERS',
  User = 'USER',
  Data = 'DATA',
}

export const COMMENT_MIN_AMOUNT = 0;
export const COMMENT_MAX_AMOUNT = 10;

export const COMMENT_MIN_LENGTH = 50;
export const COMMENT_MAX_LENGTH = 300;

export const MIN_IMAGE_AMOUNT = 0;
export const MAX_IMAGE_AMOUNT = 6;
