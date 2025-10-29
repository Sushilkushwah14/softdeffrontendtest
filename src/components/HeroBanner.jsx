import FeaturedReview from './FeaturedCard'

const HeroBanner = () => {
  return (
    <section 
      className="w-full h-[2592px] bg-cover bg-position-[center_-125px] relative"
      // style={{ backgroundImage: "url('/herobanner.jpg')" }}
    >

    
      <div className="absolute left-[39px] top-[252px] w-[802px] h-[280px] bg-transparent z-10">

       
        <h1 className="font-inter font-semibold text-[118px] leading-none opacity-75 text-white">
          Earth’s Exhale
        </h1>

       
        <p className="font-inter font-medium text-[23px] leading-[1.2] opacity-75 text-white mt-3 w-[775px]">
          "Earth Exhale" symbolizes the purity and vitality of the Earth's natural<br/>
          environment and its essential role in sustaining life.
        </p>

   
<div className="flex items-center gap-8 mt-8">

  <button
    className="w-[217px] h-16 border-2 border-white 
               rounded-xl text-white text-[20px] font-medium 
               hover:bg-white hover:text-green-800 transition-all"
  >
    Buy Now
  </button>

  
  <div className="flex items-center gap-[18px] cursor-pointer">

    <div className="w-[70px] h-[70px] border-2 border-white rounded-full 
                    flex items-center justify-center">
      <img 
        src="/Polygon.png" 
        alt="play" 
        className="w-[34px] h-[34px] opacity-75 rotate-90"
      />
    </div>


    <span className="text-white text-[25px] font-[Indie_Flower] leading-none">
      Live Demo...
    </span>

  </div>

</div>
<FeaturedReview/>

      </div>




     
    </section>
    
  )
}

export default HeroBanner
