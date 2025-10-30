// 

import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <div
      className="w-[492.5px] h-[67px] mx-auto mt-8 mb-12 rounded-[20px] border-[5px]"
      style={{
        borderImageSource:
          "linear-gradient(316.11deg, #FBD300 0.4%, #FFFFFF 110.43%)",
        borderImageSlice: 1,
      }}
    >
      <h2
        className="text-center text-3xl font-bold leading-[67px]"
        style={{ color: "#FFFFFF" }}
      >
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
