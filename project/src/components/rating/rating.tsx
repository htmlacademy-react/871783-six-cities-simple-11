import getRatingWidth from './getRatingWidth';

type RatingProps = {
  rating: number;
}

function Rating(props: RatingProps):JSX.Element {
  const ratingWidthStar = getRatingWidth(props.rating);

  return (
    <span style={{ width: ratingWidthStar }} />
  );
}

export default Rating;
