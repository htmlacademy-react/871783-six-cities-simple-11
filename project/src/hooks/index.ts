import { useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux';
import type { State, AppDispatch } from '../types/state';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;

export { useMap } from './use-map';
