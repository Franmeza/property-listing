import { TPropertyList } from "@/lib/types";
import { getPropertyList } from "../services/getPropertyListing";
import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";

type PropertyListContextType = {
  data: TPropertyList[] | undefined;
  error: Error | null;
  isLoading: boolean;
};

export const PropertyListContext =
  createContext<PropertyListContextType | null>(null);

export function PropertyListProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["property-list"],
    queryFn: () => getPropertyList(),
  });

  return (
    <PropertyListContext.Provider value={{ data, error, isLoading }}>
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
