// import React from "react";

// const Navbar = () => {
//   return (
//     <header className="w-full fixed top-0 left-0 z-50 px-6 md:px-12 py-6 flex items-center justify-between">

//       {/* Left Section (Logo) */}
//       <div className="flex items-center gap-3 w-[225px] h-[48px]">
//         <img 
//           src="/plant-1.png"  // <-- Replace file name
//           alt="logo"
//           className="w-[48px] h-[48px]"
//         />
//         <h1 
//           className="text-white text-[28px] leading-none font-[900] font-[Inter] opacity-75"
//         >
//           FloraVision.
//         </h1>
//       </div>

//       {/* Middle Section (Nav Menu) */}
//       <nav className="hidden md:flex items-center justify-center gap-10 w-[531px] h-[35px] font-[Indie_Flower] text-[24px] text-white">
//         <a href="#" className="hover:opacity-60 transition">Home</a>

//         <div className="flex items-center gap-1 cursor-pointer hover:opacity-60 transition">
//           <span>Plant Type</span>
//           <img src="/Polygon.png" alt="" className="w-4 h-4" /> {/* dropdown icon */}
//         </div>

//         <a href="#" className="hover:opacity-60 transition">More</a>
//         <a href="#" className="hover:opacity-60 transition">Contact</a>
//       </nav>

//       {/* Right Section (Search, Bag, Hamburger) */}
//       <div className="flex items-center gap-6">
//         <img src="/search.png" alt="search-icon" className="w-[26px] h-[26px] opacity-75 cursor-pointer" />
//         <img src="/bag.png" alt="bag-icon" className="w-[26px] h-[26px] opacity-75 cursor-pointer" />

//         {/* Hamburger (Visible only on mobile) */}
//         <div className=" flex flex-col gap-[6px] cursor-pointer">
//           <span className="w-[31px] border-b-4 border-white"></span>
//           <span className="w-[31px] border-b-4 border-white"></span>
//         </div>
//       </div>

//     </header>
//   );
// };

// export default Navbar;

// import React from "react";

// const Navbar = () => {
//   return (
//     <header className="w-full absolute top-0 left-0 z-50 px-6 md:px-12 py-6 flex items-center justify-between bg-transparent">

//       {/* Left Section (Logo) */}
//       <div className="flex items-center gap-3 w-[225px] h-[48px]">
//         <img 
//           src="/plant-1.png"
//           alt="logo"
//           className="w-[48px] h-[48px]"
//         />
//         <h1 
//           className="text-white text-[28px] leading-none font-[900] opacity-75"
//         >
//           FloraVision.
//         </h1>
//       </div>

//       {/* Middle Section (Nav Menu) */}
//       <nav className="hidden md:flex items-center justify-center gap-10 w-[531px] h-[35px] font-[Indie_Flower] text-[24px] text-white">
//         <a href="#" className="hover:opacity-60 transition">Home</a>

//         <div className="flex items-center gap-1 cursor-pointer hover:opacity-60 transition">
//           <span>Plant Type</span>
//           <img src="/Polygon.png" alt="" className="w-4 h-4" /> 
//         </div>

//         <a href="#" className="hover:opacity-60 transition">More</a>
//         <a href="#" className="hover:opacity-60 transition">Contact</a>
//       </nav>

//       {/* Right Section (Search, Bag, Hamburger) */}
//       <div className="flex items-center gap-6">
//         <img src="/search.png" alt="search-icon" className="w-[26px] h-[26px] opacity-75 cursor-pointer" />
//         <img src="/bag.png" alt="bag-icon" className="w-[26px] h-[26px] opacity-75 cursor-pointer" />

//         {/* Hamburger (Visible only on mobile) */}
//         <div className="flex flex-col gap-1.5  cursor-pointer">
//           <span className="w-[31px] border-b-4 border-white"></span>
//           <span className="w-[31px] border-b-4 border-white"></span>
//         </div>
//       </div>

//     </header>
//   );
// };

// export default Navbar;


// import React from "react";

// const Navbar = () => {
//   return (
//     <header className="w-full absolute top-0 left-0 z-50 px-6 md:px-12 py-6 flex items-center justify-between bg-transparent">

//       {/* Left */}
//       <div className="flex items-center gap-3 w-[225px] h-[48px]">
//         <img src="/plant-1.png" alt="logo" className="w-[96px] h-[96px]" />
//         <h1 className="text-white text-[28px] leading-none font-[900] opacity-75">
//           FloraVision.
//         </h1>
//       </div>

//       {/* Center */}
//       <nav className="hidden md:flex items-center justify-center gap-10 w-[531px] h-[35px] font-[Indie_Flower] text-[24px] text-white">
//         <a href="#" className="hover:opacity-60 transition">Home</a>
//         <div className="flex items-center gap-1 cursor-pointer hover:opacity-60 transition">
//           <span>Plant Type</span>
//           <img src="/Polygon.png" alt="" className="w-4 h-4" />
//         </div>
//         <a href="#" className="hover:opacity-60 transition">More</a>
//         <a href="#" className="hover:opacity-60 transition">Contact</a>
//       </nav>

//       {/* Right */}
//       <div className="flex items-center gap-6">
//         <img src="/search.png" alt="search-icon" className="w-[26px] h-[26px] opacity-75 cursor-pointer" />
//         <img src="/bag.png" alt="bag-icon" className="w-[26px] h-[26px] opacity-75 cursor-pointer" />

//         {/* Reliable hamburger */}
//         <div className="flex flex-col gap-1.5  cursor-pointer">
//           <span className="w-[31px] h-[4px] bg-white rounded-sm block"></span>
//           <span className="w-[31px] h-[4px] bg-white rounded-sm block"></span>
//         </div>
//       </div>

//     </header>
//   );
// };

// export default Navbar;


import React from "react";

const Navbar = () => {
  return (
    <header className="w-full absolute top-0 left-0 z-50 px-10 py-6 flex items-center justify-between bg-transparent">

      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <img 
          src="/plant-1.png"
          alt="logo"
          className="w-[36px] h-[36px] object-contain"
        />
        <h1 className="text-[#E0E0E0] text-[26px] font-black leading-[1]">
          FloraVision.
        </h1>
      </div>

      {/* Navigation Menu */}
      <nav className="hidden md:flex items-center gap-12 text-white font-[Indie_Flower] text-[22px]">
        <a href="#" className="hover:opacity-70 transition">Home</a>

        <div className="flex items-center gap-1 cursor-pointer hover:opacity-70 transition">
          <span>Plants Type</span>
          <img src="/Polygon.png" alt="" className="w-[12px] h-[12px]" />
        </div>

        <a href="#" className="hover:opacity-70 transition">More</a>
        <a href="#" className="hover:opacity-70 transition">Contact</a>
      </nav>

      {/* Icons Section */}
      <div className="flex items-center gap-6">
        <img src="/search.png" className="w-[22px] opacity-90 cursor-pointer" />
        <img src="/bag.png" className="w-[22px] opacity-90 cursor-pointer" />

        {/* Hamburger (Mobile Only) */}
        <div className="flex flex-col gap-[5px] cursor-pointer ">
          <span className="w-[30px] border-b-[3px] border-white"></span>
          <span className="w-[30px] border-b-[3px] border-white"></span>
        </div>
      </div>

    </header>
  );
};

export default Navbar;
