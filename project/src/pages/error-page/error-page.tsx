import { Link } from 'react-router-dom';
import { AppRoute } from '../../router';
import { Header } from '../../components';
import { Helmet } from 'react-helmet-async';

function ErrorPage(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 городов. Ошибка</title>
      </Helmet>

      <Header />

      <main className="page__main page__main--index page__main--index-empty">
        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper">
                <h1 className="status-error__name">Не удалось загрузить предложения</h1>
                <h2 className="status-error__inside-title">Попробуйте еще раз</h2>
                <Link to={ AppRoute.Main } className="status-error__mark">Перейти на главную</Link>
              </div>
            </section>
            <div className="cities__right-section"/>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ErrorPage;
