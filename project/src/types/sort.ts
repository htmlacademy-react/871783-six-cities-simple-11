export const sortingType = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
] as const;

export type SortingType = typeof sortingType[number];
