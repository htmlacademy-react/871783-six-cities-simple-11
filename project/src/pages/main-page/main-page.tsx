import {Header, CardList, Map, CityList, Sorting } from '../../components';
import { City, Offer, Point } from '../../types/offer';
import { Helmet} from 'react-helmet-async';
import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {changeCityAction, getOffersAction } from '../../store/action';
import { offers } from '../../mocks/offers';
import { cardsSorted } from '../../utils';
// import { SortingType } from '../../const';

type MainPageProps = {
  city: City;
}

function MainPage(props: MainPageProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [activeCard, setActiveCard] = useState<Offer | null>(null);
  const selectedCity = useAppSelector((state) => state.city);
  const cityOffers = useAppSelector((state) => state.offers);
  const sortingType = useAppSelector((state) => state.sortingType);
  const points: Point[] = cityOffers.map((offer) => ({
    id: offer.id, ...offer.city.location
  }));
  const handleCitySelect = (city: string) => dispatch(changeCityAction(city));

  // const filteredOffers = offers.filter((offer) => offer.city.name === selectedCity)
  //
  // useEffect(() => {
  //   //Добавить сортировку
  //   dispatch(getOffersAction(filteredOffers));
  // }, [selectedCity]);

  useEffect(() => {
    const filteredOffers = offers.filter((offer) => offer.city.name === selectedCity);
    // const sortedOffers: Offer[] = filteredOffers.length > 0 ? cardsSorted(filteredOffers, sortingType) : [];
    dispatch(getOffersAction(cardsSorted(filteredOffers, sortingType)));
  }, [selectedCity, sortingType]);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>{`6 городов | ${selectedCity}`}</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--index">
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
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{ cityOffers.length } places to stay in { selectedCity }</b>
              <Sorting />
              {/*<Sorting offers={ sortedOffers } />*/}
              <div className="cities__places-list places__list tabs__content">
                <CardList
                  offers={ cityOffers }
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
