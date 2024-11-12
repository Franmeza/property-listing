import { TPropertyList } from "@/lib/types";
import { API_URL } from "../lib/consts";

export const getPropertyList = async (): Promise<TPropertyList[]> => {
  try {
    const response = await fetch(`${API_URL}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching property list:", error.message);
      throw error;
    } else {
      console.error("Error fetching property list:", error);
      throw new Error("An unknown error occurred");
    }
  }
};
