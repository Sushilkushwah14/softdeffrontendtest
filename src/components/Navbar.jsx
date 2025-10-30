

import React from "react";

const Navbar = () => {
  return (
    <header className="w-full absolute top-0 left-0 z-50 px-10 py-6 flex items-center justify-between bg-transparent">

      <div className="flex items-center gap-2">
        <img 
          src="/plant-1.png"
          alt="logo"
          className="w-9 h-9 object-contain"
        />
        <h1 className="text-[#E0E0E0] text-[26px] font-black leading-none">
          FloraVision.
        </h1>
      </div>

      <nav className="hidden md:flex items-center gap-12 text-white font-[Indie_Flower] text-[22px]">
        <a href="#" className="hover:opacity-70 transition">Home</a>

        <div className="flex items-center gap-1 cursor-pointer hover:opacity-70 transition">
          <span>Plants Type</span>
          <img src="/Polygon.png" alt="" className="w-3 h-3" />
        </div>

        <a href="#" className="hover:opacity-70 transition">More</a>
        <a href="#" className="hover:opacity-70 transition">Contact</a>
      </nav>

      <div className="flex items-center gap-6">
        <img src="/search.png" className="w-[22px] opacity-90 cursor-pointer" />
        <img src="/bag.png" className="w-[22px] opacity-90 cursor-pointer" />

        <div className="flex flex-col gap-[5px] cursor-pointer ">
          <span className="w-[30px] border-b-[3px] border-white"></span>
          <span className="w-[30px] border-b-[3px] border-white"></span>
        </div>
      </div>

    </header>
  );
};

export default Navbar;
