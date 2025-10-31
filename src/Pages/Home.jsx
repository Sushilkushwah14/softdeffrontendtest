


import HeroBanner from "../components/HeroBanner";
import Navbar from "../components/Navbar";
import TopSellingPlants from "../sections/TopSellingPlants";
import TrendingPlants from "../sections/TrendingPlants";
import CustomerReviews from "../sections/CustomerReview";
import BestO2Section from "../sections/BestO2Section";
import ProgressBar from "../components/ProgressBar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-x-hidden overflow-y-auto">
      <Navbar />

      {/* 👇 Section 1: Hero */}
      <section
        id="HeroBanner"
        className="relative w-full min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/herobanner.jpg')",
          backgroundPositionY: "-125px",
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-xs"></div>

        <div className="relative z-10 flex flex-col items-start justify-center px-[60px] pt-[250px] pb-[100px]">
          <HeroBanner />
        </div>

        <div className="absolute z-10 bottom-[-220px] w-full flex flex-col items-center">
          <h2
            className="text-white font-semibold text-[54px] mb-[60px]"
            style={{
              width: "492.5px",
              height: "67px",
              borderRadius: "20px",
              opacity: 1,
            }}
          >
            Our Trendy Plants
          </h2>

          <div className="w-full flex justify-center">
            <TrendingPlants />
          </div>
        </div>
      </section>

      {/* 👇 Section 2: Top Selling */}
      <section id="TrendingPlants" className="relative bg-[#0E1C0E] text-white pt-[400px] pb-[150px]">
        <TopSellingPlants />
      </section>

      {/* 👇 Section 3: Reviews */}
      <section id="CustomerReviews" className="relative bg-[#0E1C0E] text-white py-[150px]">
        <CustomerReviews />
      </section>

      {/* 👇 Section 4: BestO2 */}
      <section className="relative bg-[#0E1C0E] text-white py-[150px]">
        <BestO2Section />
      </section>

      {/* 👇 Section 5: Progress */}
      <section className="relative bg-[#0E1C0E] text-white py-[100px] flex justify-center">
        <ProgressBar />
      </section>

      {/* 👇 Section 6: Footer */}
      <footer id="Footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;

