


// import React from 'react'

// const HeroBanner = () => {
//   return (
//     <section 
//       className="w-full h-[2592px] bg-cover bg-[center_-125px] relative flex items-center justify-center"
//       style={{ backgroundImage: "url('/herobanner.jpg')" }}
//     >

//       {/* Remove this if opacity should be 1 */}
//       {/* <div className="absolute inset-0 bg-black/30"></div> */}

//       <div className="relative z-10 text-center px-6 max-w-3xl">
//         <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
//           Your Hero Title Goes Here
//         </h1>
//         <p className="text-white mt-4 text-lg md:text-xl opacity-90">
//           Subtitle or small description text here.
//         </p>

//         <button className="mt-6 px-8 py-3 bg-white text-black rounded-full font-semibold hover:scale-105 transition">
//           Get Started
//         </button>
//       </div>

//     </section>
//   )
// }

// export default HeroBanner


import React from 'react'

const HeroBanner = () => {
  return (
    <section 
      className="w-full h-[2592px] bg-cover bg-[center_-125px] relative"
      style={{ backgroundImage: "url('/herobanner.jpg')" }}
    >

    
      <div className="absolute left-[39px] top-[252px] w-[802px] h-[280px] bg-transparent z-10">

       
        <h1 className="font-inter font-semibold text-[118px] leading-[1] opacity-75 text-white">
          Earth’s Exhale
        </h1>

       
        <p className="font-inter font-medium text-[23px] leading-[1.2] opacity-75 text-white mt-[12px] w-[775px]">
          "Earth Exhale" symbolizes the purity and vitality of the Earth's natural<br/>
          environment and its essential role in sustaining life.
        </p>

        {/* <button
          className="mt-6 px-8 py-3 border border-white text-white text-lg rounded-full 
                     hover:bg-white hover:text-green-800 transition"
        >
          Buy Now 
        </button> */}

   
<div className="flex items-center gap-[32px] mt-[32px]">

  <button
    className="w-[217px] h-[64px] border-[2px] border-white 
               rounded-[12px] text-white text-[20px] font-medium 
               hover:bg-white hover:text-green-800 transition-all"
  >
    Buy Now
  </button>

  
  <div className="flex items-center gap-[18px] cursor-pointer">

    <div className="w-[70px] h-[70px] border-[2px] border-white rounded-full 
                    flex items-center justify-center">
      <img 
        src="/Polygon.png" 
        alt="play" 
        className="w-[34px] h-[34px] opacity-75 rotate-[-90deg]"
      />
    </div>


    <span className="text-white text-[25px] font-[Indie_Flower] leading-none">
      Live Demo...
    </span>

  </div>

</div>


      </div>

    </section>
  )
}

export default HeroBanner
