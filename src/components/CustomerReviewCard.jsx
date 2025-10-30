
import React from "react";

const CustomerReviewCard = ({ photo, name, review, starImage }) => {
  return (
    <div
      className="w-lg h-[480px] rounded-[77px] border-2px 
      backdrop-blur-[25px] shadow-[0_9px_18px_0_rgba(0,0,0,0.25)]
      flex flex-col items-center justify-start text-center px-8 pt-8"
      style={{
        background: "#FFFFFF0D",
        borderImage:
          "linear-gradient(147.93deg, rgba(255,255,255,0.2) 6.68%, rgba(0,0,0,0) 51.71%, rgba(255,255,255,0.2) 93.27%) 1",
      }}
    >

      <div className="w-[120px] h-[120px] rounded-full overflow-hidden shadow-lg mb-4">
        <img
          src={photo}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>


      <h2 className="text-[38px] font-inter font-semibold text-white mb-3">
        {name}
      </h2>

   
      <div className="flex justify-center mb-5">
        <img
          src={starImage}
          alt="stars"
          className="w-[131px] h-[19px] object-contain"
        />
      </div>

      
      <p className="text-[24px] font-inter text-white/80 leading-snug w-[403px]">
        {review}
      </p>
    </div>
  );
};

export default CustomerReviewCard;
