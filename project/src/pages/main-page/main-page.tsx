import { Header, CardList, Map } from '../../components';
import { City, Offer, Point } from '../../types/offer';
import { offers } from '../../mocks/offers';
import { Helmet} from 'react-helmet-async';
import { AppRoute } from '../../router';
import { Link } from 'react-router-dom';
import { cities } from '../../const';
import { useState } from 'react';

type MainPageProps = {
  offers: Offer[];
  city: City;
}

function MainPage(props: MainPageProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<Offer | null>(null);
  const points: Point[] = offers.map((offer) => ({
    id: offer.id, ...offer.city.location
  }));

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 городов. Главная страница</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              { cities.map((city) => (
                <li className="locations__item" key={ city }>
                  <Link className="locations__item-link tabs__item" to={AppRoute.Main}>
                    <span>{ city }</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{ props.offers.length } places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select" />
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <CardList
                  offers={ props.offers }
                  offerType={ 'cities' }
                  setActiveCard={ setActiveCard }
                />
              </div>
            </section>
            <div className="cities__right-section">
              <Map
                points={ points }
                city={ props.city }
                selectedPoint={ activeCard?.id }
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
