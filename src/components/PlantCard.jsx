import React from "react";


const PlantCard = ({ data, layout }) => {
  const { name, description, image, price } = data;
  const isLeft = layout === "left";

  return (
    <div
      className={`relative w-[1619px] h-[526px] mx-auto flex items-center justify-between rounded-[151px] border-[2px] bg-[#F5F5F5]/40
        ${isLeft ? "flex-row" : "flex-row-reverse"}`}
      style={{
        borderImage:
          "linear-gradient(135.72deg, rgba(255,255,255,0.27) 8.53%, rgba(255,255,255,0) 60.59%, rgba(255,255,255,0.33) 93.17%) 1",
      }}
    >
     
      <div
        className={`absolute ${
          isLeft ? "-left-[80px]" : "-right-[80px]"
        } top-[-120px]`}
      >
        <img
          src={image}
          alt={name}
          className="w-[601px] h-[732px] object-contain"
          style={{
            boxShadow: `
              0px 0.54px 1.59px 0px #00000007,
              0px 1.22px 3.62px 0px #0000000B,
              0px 2.13px 6.31px 0px #0000000D,
              0px 3.38px 10.02px 0px #0000000F,
              0px 5.22px 15.46px 0px #00000011,
              0px 8.14px 24.12px 0px #00000014,
              0px 13.51px 40.04px 0px #00000017,
              0px 27px 80px 0px #0000001F
            `,
          }}
        />
      </div>

     
      <div
        className={`flex flex-col ${
          isLeft ? "ml-auto mr-[180px]" : "ml-[180px] mr-auto"
        } text-gray-800 max-w-[732px]`}
      >
    
        <h3 className="font-inter font-semibold text-[38px] leading-[100%] mb-6">
          {name}
        </h3>

      
        <p className="font-inter font-semibold text-[20px] leading-[100%] text-gray-600 mb-6">
          {description}
        </p>

       
        <p
          className="text-[38px] font-semibold mb-8"
          style={{
            textShadow: `
              0px 1.02px 2.21px #0000002C,
              0px 2.46px 5.32px #00000040,
              0px 4.63px 10.02px #0000004F,
              0px 8.26px 17.87px #0000005E,
              0px 15.46px 33.42px #00000072,
              0px 37px 80px #0000009E
            `,
          }}
        >
          {price}
        </p>

        
        <div className="flex items-center gap-6">
         
          <button className="w-[217px] h-[64px] border-2 border-white rounded-[12px] bg-[#FBD300] text-black font-medium text-[28px] flex items-center justify-center shadow-lg">
            Explore
          </button>


          <button className="w-[64px] h-[64px] border-2 border-white rounded-[12px] flex items-center justify-center bg-[#FBD300]">
           
          </button>
      
          <img src="/bag.png" alt="bag" className="w-[34px] h-[34px]" />
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
