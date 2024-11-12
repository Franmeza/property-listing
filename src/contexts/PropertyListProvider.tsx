import { TPropertyList } from "@/lib/types";
import { getPropertyList } from "../services/getPropertyListing";
import { useQuery } from "@tanstack/react-query";
import { createContext, useContext, useEffect, useState } from "react";

type PropertyListContextType = {
  properties: TPropertyList[] | undefined;
  error: Error | null;
  isLoading: boolean;
  isOn: boolean;
  handleSuperhostToggle: () => void;
  selectedLocation: string;
  setSelectedLocation: (location: string) => void;
  selectedPropertyType: string;
  setSelectedPropertyType: (type: string) => void;
};

export const PropertyListContext =
  createContext<PropertyListContextType | null>(null);

export function PropertyListProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOn, setIsOn] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("All Stays");
  const [selectedPropertyType, setSelectedPropertyType] = useState("");
  const [filteredProperties, setFilteredProperties] = useState<TPropertyList[]>(
    []
  );

  // Query to get the property list
  const {
    data: properties,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["property-list"],
    queryFn: getPropertyList,
  });

  // Apply filtering
  useEffect(() => {
    const filtered = properties?.filter((property) => {
      const matchesSuperhost = !isOn || property.superhost;
      const matchesLocation =
        selectedLocation === "All Stays" ||
        property.location === selectedLocation;
      const matchesType =
        !selectedPropertyType ||
        property.capacity.bedroom.toString() === selectedPropertyType;
      return matchesSuperhost && matchesLocation && matchesType;
    });
    setFilteredProperties(filtered || []);
  }, [properties, isOn, selectedLocation, selectedPropertyType]);

  // Superhost toggle
  const handleSuperhostToggle = () => setIsOn(!isOn);

  return (
    <PropertyListContext.Provider
      value={{
        properties: filteredProperties,
        error,
        isLoading,
        isOn,
        handleSuperhostToggle,
        selectedLocation,
        setSelectedLocation,
        selectedPropertyType,
        setSelectedPropertyType,
      }}
    >
      {children}
    </PropertyListContext.Provider>
  );
}

export const usePropertyList = () => {
  const context = useContext(PropertyListContext);

  if (!context) {
    throw new Error(
      "usePropertyList must be used within a PropertyListProvider"
    );
  }

  return context;
};
