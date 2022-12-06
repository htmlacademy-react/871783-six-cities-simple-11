import { Card } from '../../components';
import { Offer } from '../../types/offer';

type CardListProps = {
  offers: Offer[];
  offerType: 'nearby' | 'cities';
  setActiveCard?: (offer: Offer | null) => void;
}

function CardList(props: CardListProps): JSX.Element {

  return (
    <>
      { props.offers.map((offer) => (
        <Card
          offer={ offer }
          offerType={ props.offerType }
          key={ offer.id }
          setActiveCard={ props.setActiveCard }
        />
      ))}
    </>
  );
}

export default CardList;
