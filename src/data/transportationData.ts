import { Transportation } from "@/types/transportation";

export const transportationOptions: Transportation[] = [
  {
    id: "trans-1",
    type: "Car Rental",
    name: "Hertz Premium Cars",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80",
    price: "$40/day",
    availability: "Available in Los Angeles",
    description: "Premium car rentals for your travel needs. Choose from our wide selection of vehicles.",
    features: ["24/7 Support", "Insurance Included", "Free Cancellation", "Unlimited Mileage"],
    link: "#"
  },
  {
    id: "trans-2",
    type: "Bike Rental",
    name: "City Bikes Co.",
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=800&q=80",
    price: "$15/day",
    availability: "Available in San Francisco",
    description: "Explore the city on two wheels with our comfortable and well-maintained bikes.",
    features: ["Helmets Included", "Lock Provided", "24/7 Support", "Multiple Locations"],
    link: "#"
  },
  {
    id: "trans-3",
    type: "Public Transport",
    name: "Metro Pass",
    image: "https://images.unsplash.com/photo-1519691273254-c84106e0100d?auto=format&fit=crop&w=800&q=80",
    price: "$10/day",
    availability: "Available in New York City",
    description: "Unlimited access to buses and subway lines throughout the city.",
    features: ["Unlimited Rides", "Multiple Lines", "24/7 Service", "Mobile Ticket"],
    link: "#"
  }
];