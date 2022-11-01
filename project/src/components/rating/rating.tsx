// import starRating from './starRating';
type RatingProps = {
  rating: number;
}

function Rating(props: RatingProps):JSX.Element {
  function getRatingWidth(rating: number): string {
    const STAR_COUNT = 5;
    const SCALE_MAX = 100;
    const ratingWidth = Math.round(SCALE_MAX / STAR_COUNT * rating);
    return `${ratingWidth}%`;
  }

  const ratingWidthStar = getRatingWidth(props.rating);

  return (
    <span style={{ width: ratingWidthStar }} />
  );
}

export default Rating;
