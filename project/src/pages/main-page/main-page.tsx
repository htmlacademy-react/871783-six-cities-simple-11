import {Header, CardList, Map, CityList, Sorting } from '../../components';
import { Offer, Point } from '../../types/offer';
import { Helmet} from 'react-helmet-async';
import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchOffersAction } from '../../store/api-actions';
import { MainEmptyPage } from '../main-empty-page';
import { getCity, getSort } from '../../store/offers-process/selectors';
import { changeCity } from '../../store/offers-process/offers-process';
import { getOffers } from '../../store/offers-data/selectors';
import { cardsSorted } from '../../utils';

function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const [activeCard, setActiveCard] = useState<Offer | null>(null);
  const selectedCity = useAppSelector(getCity);
  const offers = useAppSelector(getOffers);
  const sortingType = useAppSelector(getSort);
  const compareFn = cardsSorted[sortingType];
  const cityOffers = offers.filter((offer) => offer.city.name === selectedCity);
  const sortedOffers = cityOffers.sort(compareFn);
  const points: Point[] = sortedOffers.map((offer) => ({
    id: offer.id, ...offer.location
  }));
  const handleCitySelect = (city: string) => dispatch(changeCity(city));
  const currentLocation = sortedOffers.length ? sortedOffers[0].city.location : null;

  useEffect(() => {
    dispatch(fetchOffersAction());
  }, [dispatch]);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>{`6 городов | ${selectedCity}`}</title>
      </Helmet>
      <Header />
      <main
        className={`page__main page__main--index ${!points.length ? 'page__main--index-empty' : ''}`}
      >
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CityList
              selectedCity={ selectedCity }
              onCityClick={ handleCitySelect }
            />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            {
              points.length ?
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{ sortedOffers.length } places to stay in { selectedCity }</b>
                  <Sorting />
                  <div className="cities__places-list places__list tabs__content">
                    <CardList
                      offers={ sortedOffers }
                      offerType={ 'cities' }
                      setActiveCard={ setActiveCard }
                    />
                  </div>
                </section> :
                <MainEmptyPage />
            }
            <div className="cities__right-section">
              {
                currentLocation &&
                <Map
                  points={ points }
                  city={ currentLocation }
                  selectedPoint={ activeCard?.id }
                />
              }
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
