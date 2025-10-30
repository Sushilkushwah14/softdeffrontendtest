

const TopSellingCard = ({ image, name, about, price }) => {
  return (
    <div
      className="w-lg h-[757px] border-[2px] rounded-[77px] 
      backdrop-blur-[25px] shadow-[0_9px_18px_0_rgba(0,0,0,0.25)]
      border-[2px] border-white/20 relative overflow-hidden flex flex-col items-center"
      style={{
        borderImage:
          "linear-gradient(147.93deg, rgba(255,255,255,0.2) 6.68%, rgba(0,0,0,0) 51.71%, rgba(255,255,255,0.2) 93.27%) 1",
      }}
    >
      <div
        className="w-[459px] h-[459px] mt-4 rounded-[40px] overflow-hidden shadow-[0px_46px_37px_0px_rgba(0,0,0,0.08)]"
      >
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      <h2 className="mt-6 text-[38px] font-inter font-normal text-white text-center">
        {name}
      </h2>

      <p className="mt-2 w-[372px] text-[24px] font-inter font-normal text-white/80 text-center leading-snug">
        {about}
      </p>

      <div className="mt-4 flex items-center justify-between w-[372px]">
        <span className="text-[38px] text-white font-inter font-normal">
          {price}
        </span>

        <button className="w-[55px] h-[55px] rounded-full bg-white/20 flex items-center justify-center">
 <img
            src="/bag.png"  
            alt="bag icon"
            className="w-[27px] h-[27px]"
          />
        </button>
      </div>
    </div>
  );
};

export default TopSellingCard;
