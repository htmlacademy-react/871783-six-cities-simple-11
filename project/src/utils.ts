import { SortingType } from './const';
import { Offer } from './types/offer';
import { offers } from './mocks/offers';

// export const cardsSorted = (sortingType: string, a: Offer, b: Offer): number => {
//   switch (sortingType) {
//     case SortingType.PriceHighToLow:
//       return (a: Offer, b: Offer) => a.price - b.price;
//     case SortingType.PriceLowToHigh:
//       return (a: Offer, b: Offer) => b.price - a.price;
//     case SortingType.TopRatedFirst:
//       return (a: Offer, b: Offer) => b.rating - a.rating;
//     default:
//       return -1;
//   }
//
//   return -1;
// };

// console.log(cardsSorted);

export const cardsSorted = ( offers: Offer[], sortingType: SortingType): Offer[] => {
  switch (sortingType) {
    case SortingType.PriceHighToLow:
      return offers?.sort((b, a) => a.price - b.price);
    case SortingType.PriceLowToHigh:
      return offers.sort((b, a) => b.price - a.price);
    case SortingType.TopRatedFirst:
      return offers.sort((b, a) => b.rating - a.rating);
    default:
      return offers;
  }

  return offers;
};
