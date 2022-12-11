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
  WIDTH: 27,
  HEIGHT: 39,
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

export enum Comment {
  MinAmount = 0,
  MaxAmount = 10,
  MinLength = 50,
  MaxLength = 300,
}

export enum Image {
  MinAmount = 0,
  MaxAmount = 6
}
