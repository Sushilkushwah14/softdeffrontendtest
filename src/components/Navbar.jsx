import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <header className="w-full absolute top-0 left-0 z-50 px-10 py-6 flex items-center justify-between bg-transparent">
      <div className="flex items-center gap-3">
        <div
          className="flex items-center justify-center w-[45px] h-[45px] rounded-[10px]"
          style={{
            boxShadow:
              "0px 2.32px 1.85px #0000000B, 0px 5.39px 4.31px #00000010, 0px 9.68px 7.74px #00000014, 0px 16.06px 12.85px #00000017, 0px 26.45px 21.16px #0000001B, 0px 46.23px 36.99px #00000020, 0px 100px 80px #0000002B",
          }}
        >
          <img
            src="/RG1.png"
            alt="logo"
            className="w-[90%] h-[90%] object-contain scale-125"
            style={{ transformOrigin: "center" }}
          />
        </div>

        <h1 className="text-[#E0E0E0] text-[26px] font-black leading-none">
          FloraVision.
        </h1>
      </div>

      {/* ✅ Navigation Links for single-page scroll */}
      <nav className="hidden md:flex items-center gap-12 text-white font-[Indie_Flower] text-[22px]">
        <Link
          to="HeroBanner"
          smooth={true}
          duration={600}
          offset={-70}
          className="cursor-pointer hover:opacity-70 transition"
        >
          Home
        </Link>

        <Link
          to="TrendingPlants"
          smooth={true}
          duration={600}
          offset={-70}
          className="cursor-pointer hover:opacity-70 transition"
        >
          Plants Type
        </Link>

        <Link
          to="CustomerReviews"
          smooth={true}
          duration={600}
          offset={-70}
          className="cursor-pointer hover:opacity-70 transition"
        >
          Reviews
        </Link>

        <Link
          to="Footer"
          smooth={true}
          duration={600}
          offset={-70}
          className="cursor-pointer hover:opacity-70 transition"
        >
          Contact
        </Link>
      </nav>

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
