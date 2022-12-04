import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LoginPage, MainPage, OfferPage, NotFoundPage, ErrorPage } from '../../pages';
import { Spinner } from '../../components';
import { AppRoute } from '../../router';
import HistoryRouter from '../history-router/history-router';
import browserHistory from '../../browser-history';
import { useAppSelector } from '../../hooks';
import { useAuth } from '../../hooks/use-auth/useAuth';
import { getAuthCheckedStatus, getIsLoading } from '../../store/user-process/selectors';
import { getErrorStatus } from '../../store/offers-data/selectors';

function App(): JSX.Element {
  const isAuthChecked = useAppSelector(getAuthCheckedStatus);
  const isLoading = useAppSelector(getIsLoading);
  const authorization = useAuth();
  const hasError = useAppSelector(getErrorStatus);

  if (!isAuthChecked || isLoading) {
    return (
      <Spinner />
    );
  }

  if (hasError) {
    return (
      <ErrorPage />);
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={ browserHistory}>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={
              <MainPage />
            }
          />
          <Route
            path={AppRoute.Login}
            element={
              authorization === 'AUTH' ? <MainPage /> : <LoginPage/>
            }
          />
          <Route
            path={`${AppRoute.Offer}/:id`}
            element={
              <OfferPage />
            }
          />
          <Route
            path={ AppRoute.NotFound }
            element={<NotFoundPage />}
          />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
