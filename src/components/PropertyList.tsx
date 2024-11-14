import { usePropertyList } from "../contexts/PropertyListProvider";
import PropertyCard from "./PropertyCard";

function PropertyList() {
  const { properties } = usePropertyList();

  return (
    <main className="  pb-16">
      <h2 className="text-2xl ml-28 mt-12 text-white font-semibold sm:text-3xl">
        Over 200 stays
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
