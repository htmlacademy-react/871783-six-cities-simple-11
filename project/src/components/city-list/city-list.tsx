import {cities} from '../../const';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../router';
import { useAppSelector} from '../../hooks';

type CityListProps = {
  selectedCity: string;
  onCityClick: (value: string) => void;
}

function CityList({ selectedCity, onCityClick }: CityListProps): JSX.Element {
  selectedCity = useAppSelector((state) => state.city);

  return (
    <ul className="locations__list tabs__list">
      { cities.map((city) => (
        <li className="locations__item" key={ city }>
          <Link
            className={`locations__item-link ${city === selectedCity ? 'tabs__item tabs__item--active' : ''}`}
            onClick={() => onCityClick(city)}
            to={AppRoute.Main}
          >
            <span>{ city }</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default CityList;
