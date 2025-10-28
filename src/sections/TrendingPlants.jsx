import React from "react";
import SectionTitle from "../components/SectionTitle";
import PlantCard from "../components/PlantCard";
import { trendingPlants } from "../data/trendingPlants";

const TrendingPlants = () => {
  return (
    <section className="py-12 container mx-auto">
      <SectionTitle title="Our Trendy plants" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        {trendingPlants.map((plant) => (
          <PlantCard key={plant.id} data={plant} />
        ))}
      </div>
    </section>
  );
};

export default TrendingPlants;
