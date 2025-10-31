import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#121A11] text-white py-16 px-20 font-['Inter']">
      <div className="max-w-[1728px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        <div>
          <div className="flex items-center mb-6">
          
            <img
              src="/RG1.png"
              alt="FloraVision logo"
              className="w-[94px] h-[94px] shadow-[0px_100px_80px_#0000002B,0px_46px_37px_#00000020,0px_26px_21px_#0000001B,0px_16px_13px_#00000017,0px_10px_8px_#00000014,0px_5px_4px_#00000010,0px_2px_2px_#0000000B]"
            />
            <h1 className="ml-5 text-[45px] font-black opacity-75 leading-none">
              FloraVision.
            </h1>
          </div>

          <p className="text-[28px] font-medium leading-[100%] opacity-90 w-[580px] mb-10">
            "From lush indoor greens to vibrant outdoor blooms, our plants are
            crafted to thrive and elevate your living environment."
          </p>

          <div className="flex gap-10 text-[28px] font-extrabold">
            <span>FB</span>
            <span>TW</span>
            <span>LI</span>
          </div>
        </div>

        <div>
          <h2 className="text-[28px] font-extrabold mb-6">Quick Link’s</h2>
          <ul className="space-y-5 text-[24px] font-medium underline">
            <li>
              <a href="#home" className="hover:opacity-80">
                Home
              </a>
            </li>
            <li>
              <a href="#plants" className="hover:opacity-80">
                Type’s Of plant’s
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:opacity-80">
                Contact
              </a>
            </li>
            <li>
              <a href="#privacy" className="hover:opacity-80">
                Privacy
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-[28px] font-extrabold mb-6">For Every Update.</h2>
          <div className="flex items-center border-2 border-white rounded-lg overflow-hidden w-[562px] h-[74px]">
            <input
              type="email"
              placeholder="Enter Email"
              className="bg-transparent flex-grow px-6 text-[22px] font-medium outline-none placeholder-white"
            />
            <button className="bg-white text-black font-bold uppercase text-[22px] w-[165px] h-[65px]">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center md:text-right text-[24px] font-medium text-white opacity-90">
        FloraVision © all right reserve
      </div>
    </footer>
  );
};

export default Footer;

