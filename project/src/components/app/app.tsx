import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LoginPage, MainPage, OfferPage, NotFoundPage } from '../../pages';
import { PrivateRoute } from '../../components';
import { AppRoute } from '../../router';
import { AuthorizationStatus } from '../../const';
import { Offers } from '../../types/offer';
import { Reviews} from '../../types/review';

type AppScreenProps = {
  offers: Offers;
  reviews: Reviews;
}

function App(props: AppScreenProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage offers = { props.offers } />}
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
            element={<OfferPage offers = { props.offers } reviews = { props.reviews } />}
          />
          <Route
            path='*'
            element={<NotFoundPage />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
