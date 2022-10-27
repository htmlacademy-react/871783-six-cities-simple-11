import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage, MainPage, OfferPage, NotFoundPage } from '../../pages';
import { PrivateRoute } from '../../components';
import { AppRoute, AuthorizationStatus } from '../../router';

type AppScreenProps = {
  cardsCount: number;
}

function App(props: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage cardsCount={props.cardsCount}/>}
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
          path={AppRoute.Offer}
          element={<OfferPage />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
