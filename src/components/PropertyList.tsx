import { usePropertyList } from "../contexts/PropertyListProvider";
import PropertyCard from "./PropertyCard";

function PropertyList() {
  const { properties } = usePropertyList();

  return (
    <main className="flex flex-col mt-12 min-h-screen">
      <h2 className="text-2xl mx-16 text-white font-semibold sm:text-3xl">
        Find your next adventure
      </h2>

      <div className="flex flex-wrap gap-x-8 gap-y-32 justify-center items-center mt-8">
        {properties?.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </main>
  );
}

export default PropertyList;
