import { Offers } from '../types/offer';

export const offers: Offers = [
  {
    'id': 1,
    'isPremium': true,
    'previewImage': 'img/apartment-01.jpg',
    'images': [
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
    ],
    'price': 120,
    'rating': 5,
    'title': 'Beautiful & luxurious apartment at great location',
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green' +
      ' and from 18th century.',
    'type': 'apartment',
    'badrooms': 3,
    'maxAdults': 4,
    'insideItems': [
      'Coffee machine',
      'Dishwasher',
      'Wi-Fi',
    ],
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.3909553943508,
        'longitude': 4.85309666406198,
        'zoom': 12,
      }
    },
    'host': {
      'id': 77,
      'avatar': 'img/avatar-max.jpg',
      'name': 'Max',
      'isPro': true,
    },
  },
  {
    'id': 2,
    'isPremium': false,
    'previewImage': 'img/apartment-03.jpg',
    'images': [
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
    ],
    'price': 80,
    'rating': 4,
    'title': 'Wood and stone place',
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green' +
      ' and from 18th century.',
    'type': 'home',
    'badrooms': 2,
    'maxAdults': 4,
    'insideItems': [
      'Coffee machine',
      'Dishwasher',
      'Wi-Fi',
    ],
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.3609553943508,
        'longitude': 4.85309666406198,
        'zoom': 12,
      }
    },
    'host': {
      'id': 66,
      'avatar': 'img/avatar-max.jpg',
      'name': 'Max',
      'isPro': true,
    },
  },
  {
    'id': 3,
    'isPremium': true,
    'previewImage': 'img/apartment-02.jpg',
    'images': [
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
    ],
    'price': 180,
    'rating': 5,
    'title': 'Nice, cozy, warm big bed apartment',
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green' +
      ' and from 18th century.',
    'type': 'apartment',
    'badrooms': 3,
    'maxAdults': 3,
    'insideItems': [
      'Coffee machine',
      'Dishwasher',
      'Wi-Fi',
    ],
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.3909553943508,
        'longitude': 4.929309666406198,
        'zoom': 12,
      }
    },
    'host': {
      'id': 88,
      'avatar': 'img/avatar-max.jpg',
      'name': 'Matt',
      'isPro': false,
    },
  },
  {
    'id': 4,
    'isPremium': false,
    'previewImage': 'img/apartment-01.jpg',
    'images': [
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
    ],
    'price': 132,
    'rating': 4,
    'title': 'Canal View Prinsengracht',
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green' +
      ' and from 18th century.',
    'type': 'apartment',
    'badrooms': 2,
    'maxAdults': 4,
    'insideItems': [
      'Coffee machine',
      'Dishwasher',
      'Wi-Fi',
    ],
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.3809553943508,
        'longitude': 4.939309666406198,
        'zoom': 12,
      }
    },
    'host': {
      'id': 99,
      'avatar': 'img/avatar-angelina.jpg',
      'name': 'Angelina',
      'isPro': false,
    },
  },
];
