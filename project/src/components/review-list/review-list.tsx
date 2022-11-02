import { UserReview } from '../../components';
import { Reviews} from '../../types/review';

type ReviewListProps = {
  reviews: Reviews;
}

function ReviewList({reviews}: ReviewListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      { reviews.map((review) => (
        <UserReview
          review={ review }
          key={ review.id }
        />
      ))}
    </ul>
  );
}

export default ReviewList;
