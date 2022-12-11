import { UserReview } from '../../components';
import { Reviews} from '../../types/review';
import { Comment } from '../../const';

type ReviewListProps = {
  reviews: Reviews;
}

function ReviewList({reviews}: ReviewListProps): JSX.Element {
  let sortedReviews: Reviews = [];

  if (reviews.length) {
    sortedReviews = [...reviews]
      .sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf())
      .slice(Comment.MinAmount, Comment.MaxAmount);
  } else {
    sortedReviews = reviews;
  }

  return (
    <ul className="reviews__list">
      { sortedReviews.map((review) => (
        <UserReview
          review={ review }
          key={ review.id }
        />
      ))}
    </ul>
  );
}

export default ReviewList;
