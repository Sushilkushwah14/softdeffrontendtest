

import { reviewData } from "../data/reviewData";

const FeaturedReview = () => {
  const ronnieReview = reviewData.find(
    (review) => review.name === "Ronnie Hamill"
  );

  return (
    <section className="relative w-full min-h-screen flex justify-start items-center bg-transparent">
      <div
        className="absolute md:w-[409px] md:h-[237px] w-[80vw] h-[30vh] left-0 top-[20vh]
                   rounded-[45px] border border-white/30 
                   backdrop-blur-[25px] bg-white/10 shadow-[0px_9px_18px_rgba(0,0,0,0.25)]"
      >
        <div className="flex items-center gap-3 absolute top-[37px] left-[27px]">
          <img
            src={ronnieReview.photo}
            alt={ronnieReview.name}
            className="w-[54px] h-[54px] rounded-full object-cover"
          />

          <div>
            <h2 className="font-inter font-semibold text-[18px] text-white mb-[3px]">
              {ronnieReview.name}
            </h2>
            <img
              src={ronnieReview.starImage}
              alt="stars"
              className="w-[90px] h-[15px]"
            />
          </div>
        </div>

        <p
          className="absolute top-[120px] left-[27px] w-[340px] text-[17px] text-white/90 leading-[100%] font-inter font-normal"
        >
          {ronnieReview.review}
        </p>
      </div>
    </section>
  );
};

export default FeaturedReview;
