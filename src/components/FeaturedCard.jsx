
import { reviewData } from "../data/reviewData";

const FeaturedReview = () => {
  const ronnieReview = reviewData.find(
    (review) => review.name === "Ronnie Hamill"
  );

  return (
    <section
      className="relative w-full h-screen flex justify-start items-center bg-transparent"
    >
      <div
        className="absolute"
        style={{
          width: "409px",
          height: "237px",
          top: "300px",
          left: "43px",
          borderRadius: "45px",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "rgba(255,255,255,0.3)",
          backdropFilter: "blur(25px)",
          background: "rgba(255,255,255,0.13)",
          boxShadow: "0px 9px 18px rgba(0,0,0,0.25)",
        }}
      >
        {/* Top Section - Image, Name, and Stars */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            position: "absolute",
            top: "37px",
            left: "27px",
            width: "233px",
            height: "64px",
          }}
        >
          <img
            src={ronnieReview.photo}
            alt={ronnieReview.name}
            style={{
              width: "54px",
              height: "54px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />

          <div>
            <h2
              style={{
                fontFamily: "Inter",
                fontWeight: 600,
                fontSize: "18px",
                color: "#fff",
                marginBottom: "3px",
              }}
            >
              {ronnieReview.name}
            </h2>
            <img
              src={ronnieReview.starImage}
              alt="stars"
              style={{ width: "90px", height: "15px" }}
            />
          </div>
        </div>

        {/* Review Text */}
        <p
          style={{
            position: "absolute",
            top: "120px",
            left: "27px",
            width: "340px",
            fontFamily: "Inter",
            fontWeight: 400,
            fontSize: "17px",
            lineHeight: "100%",
            color: "rgba(255,255,255,0.9)",
          }}
        >
          {ronnieReview.review}
        </p>
      </div>
    </section>
  );
};

export default FeaturedReview;
