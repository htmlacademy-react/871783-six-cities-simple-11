import { useAppSelector } from '../index';

export const useAuth = () => useAppSelector((state) => state.authorizationStatus);
