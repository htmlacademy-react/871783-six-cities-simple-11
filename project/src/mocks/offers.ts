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
        'zoom': 20,
      }
    }
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
        'zoom': 6,
      }
    }
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
        'zoom': 10,
      }
    }
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
        'zoom': 6,
      }
    }
  },
];
