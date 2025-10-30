
import { topSellingPlants } from "../data/topSellingPlants";
import PlantCard from "../components/PlantCard";
import TopSellingCard from "../components/TopSellingCards";
import SectionTitle from "../components/SectionTitle";

const TopSellingPlants = () => {
  return (
    <section className="py-16 container mx-auto">
      <SectionTitle title="Top Selling Plants" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-8">
        {topSellingPlants.map((plant) => (
          <TopSellingCard
          key={plant.id}
          image={`/${plant.image}`}
          name={plant.name}
          about={plant.about}
          price={plant.price}
        />
        ))}
      </div>
    </section>
  );
};
export default TopSellingPlants;