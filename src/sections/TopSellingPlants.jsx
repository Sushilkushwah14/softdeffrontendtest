// import React from "react";
// import SectionTitle from "../components/SectionTitle";
// import PlantCard from "../components/PlantCard";
// import { topSellingPlants } from "../data/topSellingPlants";

// const TopSellingPlants = () => {
//   return (
//     <section className="py-12 container mx-auto">
//       <SectionTitle title="Our Top Selling Plants" />

//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8">
//         {topSellingPlants.map((plant) => (
//           <PlantCard key={plant.id} data={plant} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default TopSellingPlants;
import { topSellingPlants } from "../data/topSellingPlants";
import PlantCard from "../components/PlantCard";
import SectionTitle from "../components/SectionTitle";

const TopSellingPlants = () => {
  return (
    <section className="py-16 container mx-auto">
      <SectionTitle title="Top Selling Plants" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-8">
        {topSellingPlants.map((plant) => (
          <PlantCard key={plant.id} data={plant} />
        ))}
      </div>
    </section>
  );
};
