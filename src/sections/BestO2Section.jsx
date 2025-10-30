

import React from "react";
import SectionTitle from "../components/SectionTitle";

const BestO2Section = () => {
  return (
    <section
      className="relative w-[1678px] h-[1099px] mx-auto mt-[100px] text-white"
      style={{
        opacity: 1,
      }}
    >
      <div
        className="absolute top-[440px] left-[50%] -translate-x-1/2"
        style={{
          width: "1600px",
          height: "755px",
          borderRadius: "92px",
          borderWidth: "3px",
          borderStyle: "solid",
          borderImage:
            "linear-gradient(101.82deg, rgba(255,255,255,0.44) 2.51%, rgba(0,0,0,0) 39.22%, rgba(255,255,255,0.33) 97.85%) 1",
          background: "rgba(255,255,255,0.04)",
          backdropFilter: "blur(25px)",
          WebkitBackdropFilter: "blur(25px)",
        }}
      ></div>
        <section className="py-16 container mx-auto">
      <SectionTitle title="Our Best O2" />
      </section>
      <div className="absolute top-[220px] left-2.5 w-[877px] h-[877px] overflow-hidden rounded-[40px]">
        <img
          src="/RoseGold3.png"
          alt="O2 Plant"
          className="w-full h-full object-cover rounded-[40px]"
        />
      </div>

      <div className="absolute top-[479px] left-[896px] w-[739px] h-[92px]">
        <h2 className="font-inter font-semibold text-[38px] leading-none">
          We Have Small And Best O₂ Plants Collection’s
        </h2>
      </div>

      <p className="absolute top-[613px] left-[896px] w-[748px] text-[24px] font-inter font-medium opacity-90 leading-snug">
        Oxygen-producing plants, often referred to as "O₂ plants," are those that
        release oxygen into the atmosphere through the process of photosynthesis.
      </p>

      <p className="absolute top-[765px] left-[896px] w-[748px] text-[28px] font-inter font-semibold opacity-90 leading-snug">
        Many plants can help filter out pollutants and toxins from the air, such as
        formaldehyde, benzene, and trichloroethylene. This makes the air cleaner
        and healthier to breathe.
      </p>

      <button
        className="absolute top-[915px] left-[897px] w-[217px] h-16 bg-transparent border-2 border-white 
                   rounded-xl text-[24px] font-inter font-normal opacity-90 hover:bg-white hover:text-green-800 transition-all duration-300"
      >
        Explore
      </button>

      <img
        src="/right-arrow3.png"
        alt="left arrow"
        className="absolute top-[920px] left-[1411px] w-6 h-6 opacity-90 cursor-pointer"
      />

      <div className="absolute top-[920px] left-[1478px] flex items-center gap-1 text-[20px] font-bold">
        01
        <span className="text-[15px] opacity-90">/04</span>
      </div>

      <img
        src="/right-arrow2.png"
        alt="right arrow"
        className="absolute top-[920px] left-[1573px] w-6 h-6 opacity-90 cursor-pointer"
      />
    </section>
  );
};

export default BestO2Section;


