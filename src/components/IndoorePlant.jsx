

const IndoorePlant = () => {
  return (
    <div
      className="absolute top-[194px] left-[1164px] w-[500px] h-[650px] rounded-[40px] 
      flex flex-col items-center justify-start shadow-[0_9px_18px_0_rgba(0,0,0,0.25)] 
      overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, rgba(28, 40, 28, 0.8) 0%, rgba(12, 20, 12, 0.9) 100%)",
        border: "1px solid rgba(255,255,255,0.1)",
        backdropFilter: "blur(20px)",
      }}
    >
      <div
        className="w-[420px] h-[420px] mt-6 rounded-[30px] flex items-center justify-center"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.08), transparent 80%)",
        }}
      >
        <img
          src="/RoseGold3.png"
          alt="Indoor Plant"
          className="w-full h-full object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.3)]"
        />
      </div>

      <div className="mt-10 flex flex-col items-start w-[372px]">
        <p className="text-white/80 font-inter text-[20px] leading-none">
          Indoor Plant
        </p>

        <div className="flex items-center gap-15 mt-3">
          <p className="text-white font-inter text-[36px] leading-none">
            Aglaonema plant
          </p>
          <img src="/right-arrow2.png" alt="arrow" className="w-6 h-6" />
        </div>

        <button
          className="mt-8 w-[220px] h-14 rounded-xl border border-white/70
          flex items-center justify-center hover:bg-white/10 transition-all duration-300"
        >
          <span className="text-[22px] font-inter text-white">Buy Now</span>
        </button>

        <div className="flex items-center gap-2 mt-10 ml-[150px]">
          <div className="w-[21px] h-1.5 rounded-[46px] bg-white"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-white/60"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-white/60"></div>
        </div>
      </div>
    </div>
  );
};

export default IndoorePlant;
