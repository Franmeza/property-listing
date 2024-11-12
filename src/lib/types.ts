export type TPropertyList = {
  id: string;
  title: string;
  description: string;
  image: string;
  location: string;
  price: number;
  rating: number;
  superhost: boolean;
  capacity: {
    people: number;
    bedroom: number;
  };
};
