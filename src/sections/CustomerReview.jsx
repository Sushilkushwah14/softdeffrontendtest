

import CustomerReviewCard from "../components/CustomerReviewCard";
import { reviewData } from "../data/reviewData";
import SectionTitle from "../components/SectionTitle";

const CustomerReviews = () => {
  const filteredReviews = reviewData.filter(
    (review) => review.name !== "Ronnie Hamill"
  );

  return (
    <section className="py-16 container mx-auto flex flex-col items-center">
      <SectionTitle title="Customer Reviews" />
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {filteredReviews.map((review, index) => (
          <CustomerReviewCard key={index} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
