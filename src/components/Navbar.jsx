

import React from "react";

const Navbar = () => {
  return (
    <header className="w-full absolute top-0 left-0 z-50 px-10 py-6 flex items-center justify-between bg-transparent">
      {/* Logo Section */}
      <div className="flex items-center gap-3">
        {/* Container box for plant image */}
       <div
          className="flex items-center justify-center w-[45px] h-[45px]  rounded-[10px]"
          style={{
            boxShadow:
              "0px 2.32px 1.85px #0000000B, 0px 5.39px 4.31px #00000010, 0px 9.68px 7.74px #00000014, 0px 16.06px 12.85px #00000017, 0px 26.45px 21.16px #0000001B, 0px 46.23px 36.99px #00000020, 0px 100px 80px #0000002B",
          }}
        >
          <img
            src="/plant-1.png"
            alt="logo"
            className="w-[38px] h-[38px] object-contain"
          />
        </div>

        <h1 className="text-[#E0E0E0] text-[26px] font-black leading-none">
          FloraVision.
        </h1>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex items-center gap-12 text-white font-[Indie_Flower] text-[22px]">
        <a href="#" className="hover:opacity-70 transition">
          Home
        </a>

        <div className="flex items-center gap-1 cursor-pointer hover:opacity-70 transition">
          <span>Plants Type</span>
          <img src="/Polygon.png" alt="" className="w-3 h-3" />
        </div>

        <a href="#" className="hover:opacity-70 transition">
          More
        </a>
        <a href="#" className="hover:opacity-70 transition">
          Contact
        </a>
      </nav>

      {/* Right Icons */}
      <div className="flex items-center gap-6">
        <img
          src="/search.png"
          className="w-[22px] opacity-90 cursor-pointer"
          alt="search"
        />
        <img
          src="/bag.png"
          className="w-[22px] opacity-90 cursor-pointer"
          alt="bag"
        />

        <div className="flex flex-col gap-[5px] cursor-pointer">
          <span className="w-[30px] border-b-[3px] border-white"></span>
          <span className="w-[30px] border-b-[3px] border-white"></span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
