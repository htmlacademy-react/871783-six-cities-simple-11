import { useAppSelector } from '../index';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

export const useAuth = () => useAppSelector(getAuthorizationStatus);
