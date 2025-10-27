// import React from 'react'

// const HeroBanner = () => {
//   return (
//     <section 
//       className="w-full min-h-screen bg-cover bg-center relative flex items-center justify-center"
//       style={{ backgroundImage: "url('/herobanner.jpg')" }} 
//     >
     
//       <div className="absolute inset-0 bg-black/30"></div>

    
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
      className="w-full h-[2592px] bg-cover bg-[center_-125px] relative flex items-center justify-center"
      style={{ backgroundImage: "url('/herobanner.jpg')" }}
    >

      {/* Remove this if opacity should be 1 */}
      {/* <div className="absolute inset-0 bg-black/30"></div> */}

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
          Your Hero Title Goes Here
        </h1>
        <p className="text-white mt-4 text-lg md:text-xl opacity-90">
          Subtitle or small description text here.
        </p>

        <button className="mt-6 px-8 py-3 bg-white text-black rounded-full font-semibold hover:scale-105 transition">
          Get Started
        </button>
      </div>

    </section>
  )
}

export default HeroBanner
