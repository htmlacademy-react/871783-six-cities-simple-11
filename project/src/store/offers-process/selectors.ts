import { State } from '../../types/state';
import { SortingType } from '../../types/sort';
import { NameSpace } from '../../const';

export const getCity = (state: State): string => state[NameSpace.Offers].city;
export const getSort = (state: State): SortingType => state[NameSpace.Offers].sortingType;
