import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LoginPage, MainPage, OfferPage, NotFoundPage } from '../../pages';
import { Spinner } from '../../components';
import { AppRoute } from '../../router';
import { AuthorizationStatus } from '../../const';
import HistoryRouter from '../history-router/history-router';
import browserHistory from '../../browser-history';
import { useAppSelector } from '../../hooks';
import { useAuth } from '../../hooks/use-auth/useAuth';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isLoading = useAppSelector((state) => state.isLoading);
  const authorization = useAuth();

  if (authorizationStatus === AuthorizationStatus.Unknown || isLoading) {
    return (
      <Spinner />
    );
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
