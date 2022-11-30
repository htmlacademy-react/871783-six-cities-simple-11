import { Offer } from '../../types/offer';
import { Link } from 'react-router-dom';
import {AppRoute} from '../../router';
import { Rating } from '../../components';

type CardProps = {
  offer: Offer;
  offerType: 'nearby' | 'cities';
  setActiveCard: (offer: Offer | null) => void;
}

function Card(props: CardProps): JSX.Element {
  const path = `${AppRoute.Offer}/${props.offer.id}`;

  return (
    <article
      className={`${ props.offerType === 'cities' ? 'cities' : 'near-places'}__card place-card`}
      onMouseOver={() => props.setActiveCard(props.offer) }
      onMouseLeave={() => props.setActiveCard(null)}
      key={props.offer.id}
    >
      {
        props.offer.isPremium ?
          <div className="place-card__mark">
            <span>Premium</span>
          </div> :
          ''
      }
      <div className={`${ props.offerType === 'cities' ? 'cities' : 'near-places'}__image-wrapper place-card__image-wrapper`}>
        <Link to={path}>
          <img className="place-card__image" src={ props.offer.previewImage } width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{ props.offer.price }</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <Rating rating={ Math.round(props.offer.rating) } />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={path}>{ props.offer.title }</Link>
        </h2>
        <p className="place-card__type">{ props.offer.type }</p>
      </div>
    </article>
  );
}

export default Card;
