import getRatingWidth from './getRatingWidth';

type RatingProps = {
  rating: number;
}

function Rating({rating}: RatingProps):JSX.Element {
  const ratingWidthStar = getRatingWidth(rating);

  return (
    <span style={{ width: ratingWidthStar }} />
  );
}

export default Rating;
