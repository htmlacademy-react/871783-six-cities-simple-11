import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LoginPage, MainPage, OfferPage, NotFoundPage } from '../../pages';
import { PrivateRoute } from '../../components';
import { AppRoute } from '../../router';
import { AuthorizationStatus } from '../../const';
import { City, Offers } from '../../types/offer';
import { Reviews} from '../../types/review';
import HistoryRouter from '../history-router/history-router';
import browserHistory from '../../browser-history';

type AppScreenProps = {
  city: City;
  offers: Offers;
  reviews: Reviews;
}

function App(props: AppScreenProps): JSX.Element {
  return (
    <HelmetProvider>
      <HistoryRouter history={ browserHistory}>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={
              <MainPage
                city={ props.city }
              />
            }
          />
          <Route
            path={AppRoute.Login}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.NoAuth}
              >
                <LoginPage/>
              </PrivateRoute>
            }
          />
          <Route
            path={`${AppRoute.Offer}/:id`}
            element={
              <OfferPage
                city={ props.city }
                offers={ props.offers }
                reviews={ props.reviews }
              />
            }
          />
          <Route
            path='*'
            element={<NotFoundPage />}
          />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
