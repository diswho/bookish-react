import { Review } from "../types";
import ReviewItem from "./ReviewItem";

const ReviewList = ({ review }: { review: Review[] }) => {
  return (
    <div data-testid="reviews-container">
      {review.map((review) => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </div>
  );
};

export default ReviewList;
