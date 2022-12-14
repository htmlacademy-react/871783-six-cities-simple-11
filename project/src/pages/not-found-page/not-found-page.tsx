import { Link } from 'react-router-dom';
import { AppRoute } from '../../router';
import './not-found-page.css';
import { Header } from '../../components';
import { Helmet } from 'react-helmet-async';

function NotFoundPage(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 городов. Страница не найдена</title>
      </Helmet>

      <Header />

      <main className="page__main page__main--index page__main--index-empty">
        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper">
                <h1 className="status-error__name">404.</h1>
                <h2 className="status-error__inside-title">Страница не найдена</h2>
                <Link to={AppRoute.Main} className="status-error__mark">Перейти на главную</Link>
              </div>
            </section>
            <div className="cities__right-section"/>
          </div>
        </div>
      </main>
    </div>
  );
}

export default NotFoundPage;
