import { randomCities } from './const';
import { SortingType } from './types/sort';
import { Offer } from './types/offer';

function randomElem(theArray: string[]): string {
  const randomIndex = Math.floor(Math.random() * theArray.length);
  return theArray[randomIndex];
}

export const getRandomCity = randomElem(randomCities);

export const cardsSorted: Record<SortingType, (a: Offer, b: Offer) => number> = {
  'Top rated first': (a: Offer, b: Offer) => b.rating - a.rating,
  'Price: high to low': (a: Offer, b: Offer) => b.price - a.price,
  'Price: low to high': (a: Offer, b: Offer) => a.price - b.price,
  Popular: (a: Offer, b: Offer) => 0,
};
