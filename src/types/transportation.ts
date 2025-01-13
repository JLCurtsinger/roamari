export interface Transportation {
  id: string;
  type: "Car Rental" | "Bike Rental" | "Public Transport";
  name: string;
  image: string;
  price: string;
  availability: string;
  description: string;
  features: string[];
  link: string;
}