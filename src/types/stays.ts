export interface Stay {
  id: string;
  title: string;
  location: string;
  price: string;
  wifiSpeed: string;
  type: string;
  image: string;
  description: string;
  amenities: string[];
  reviews: Review[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Destination {
  id: string;
  name: string;
  description: string;
  image: string;
  introduction: string;
  attractions: string[];
  travelOptions: TravelOption[];
  recommendedStays: string[]; // IDs of recommended stays
}

export interface TravelOption {
  type: 'flight' | 'bus' | 'train';
  description: string;
  price: string;
}