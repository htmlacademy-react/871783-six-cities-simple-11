import { Offers } from '../types/offer';

export const offers: Offers = [
  {
    'id': 1,
    'isPremium': true,
    'image': 'img/apartment-01.jpg',
    'price': 120,
    'rating': 5,
    'title': 'Beautiful & luxurious apartment at great location',
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
        'latitude': 52.37035,
        'longitude': 4.90321,
        'zoom': 20,
      }
    }
  },
  {
    'id': 2,
    'isPremium': false,
    'image': 'img/room.jpg',
    'price': 80,
    'rating': 4,
    'title': 'Wood and stone place',
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
        'latitude': 52.37028,
        'longitude': 4.90765,
        'zoom': 6,
      }
    }
  },
  {
    'id': 3,
    'isPremium': true,
    'image': 'img/apartment-03.jpg',
    'price': 180,
    'rating': 5,
    'title': 'Nice, cozy, warm big bed apartment',
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
        'latitude': 52.37035,
        'longitude': 4.90321,
        'zoom': 10,
      }
    }
  },
  {
    'id': 4,
    'isPremium': false,
    'image': 'img/apartment-02.jpg',
    'price': 132,
    'rating': 4,
    'title': 'Canal View Prinsengracht',
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
        'latitude': 52.37035,
        'longitude': 4.90321,
        'zoom': 6,
      }
    }
  },
];
