
import { trendingPlants } from "../data/trendingPlants";
import PlantCard from "../components/PlantCard";
import SectionTitle from "../components/SectionTitle";

const TrendingPlants = () => {
  return (
    <section className="py-16 container mx-auto">
      <SectionTitle title="Our Trendy plants" />

      <div className="flex flex-col gap-12">
        <PlantCard data={trendingPlants[0]} layout="left" />
        <PlantCard data={trendingPlants[1]} layout="right" />
      </div>
    </section>
  );
};

export default TrendingPlants;