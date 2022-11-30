import {Header, CardList, Map, CityList, Sorting } from '../../components';
import { Offer, Point } from '../../types/offer';
import { Helmet} from 'react-helmet-async';
import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCityAction } from '../../store/action';
import { SortingType } from '../../types/sort';
import { fetchOffersAction } from '../../store/api-actions';
import { MainEmptyPage } from '../main-empty-page';


export const cardsSorted: Record<SortingType, (a: Offer, b: Offer) => number> = {
  'Top rated first': (a: Offer, b: Offer) => b.rating - a.rating,
  'Price: high to low': (a: Offer, b: Offer) => b.price - a.price,
  'Price: low to high': (a: Offer, b: Offer) => a.price - b.price,
  Popular: (a: Offer, b: Offer) => 0,
};

function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const [activeCard, setActiveCard] = useState<Offer | null>(null);
  const selectedCity = useAppSelector((state) => state.city);
  const sortingType = useAppSelector((state) => state.sortingType);
  const compareFn = cardsSorted[sortingType];
  const cityOffers = useAppSelector((state) => state.offers.filter((offer) => offer.city.name === selectedCity).sort(compareFn));
  const points: Point[] = cityOffers.map((offer) => ({
    id: offer.id, ...offer.location
  }));
  const handleCitySelect = (city: string) => dispatch(changeCityAction(city));
  const currentLocation = cityOffers.length ? cityOffers[0].city.location : null;
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
                  <b className="places__found">{ cityOffers.length } places to stay in { selectedCity }</b>
                  <Sorting />
                  <div className="cities__places-list places__list tabs__content">
                    <CardList
                      offers={ cityOffers }
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
