import { Stay, Destination } from "@/types/stays";

export const stays: Stay[] = [
  {
    id: "stay-1",
    title: "Modern Studio in Downtown",
    location: "Barcelona, Spain",
    price: "$1,800",
    wifiSpeed: "300",
    type: "Studio Apartment",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80",
    description: "Experience modern living in the heart of Barcelona. This studio apartment offers everything you need for a comfortable stay, including high-speed internet and a fully equipped kitchen.",
    amenities: ["High-speed WiFi", "Kitchen", "Air Conditioning", "Workspace", "24/7 Security"],
    reviews: [
      {
        id: "review-1",
        author: "John Doe",
        rating: 5,
        comment: "Amazing location and super fast internet!",
        date: "2024-02-15"
      }
    ]
  },
  {
    id: "stay-2",
    title: "Beachfront Condo",
    location: "Bali, Indonesia",
    price: "$1,200",
    wifiSpeed: "200",
    type: "1 Bedroom Condo",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80",
    description: "Wake up to stunning ocean views in this beautiful beachfront condo. Perfect for digital nomads seeking inspiration by the sea.",
    amenities: ["Beachfront Access", "WiFi", "Pool", "Kitchen", "Air Conditioning"],
    reviews: [
      {
        id: "review-2",
        author: "Jane Smith",
        rating: 4,
        comment: "Beautiful location and great amenities!",
        date: "2024-02-10"
      }
    ]
  },
  {
    id: "stay-3",
    title: "Cozy Mountain Cabin",
    location: "Colorado, USA",
    price: "$2,400",
    wifiSpeed: "150",
    type: "Cabin",
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=800&q=80",
    description: "Experience the serenity of mountain living in this cozy cabin. Perfect for those seeking a peaceful work environment surrounded by nature.",
    amenities: ["Mountain Views", "WiFi", "Fireplace", "Full Kitchen", "Hiking Trails"],
    reviews: [
      {
        id: "review-3",
        author: "Mike Johnson",
        rating: 5,
        comment: "Perfect getaway for remote work!",
        date: "2024-02-01"
      }
    ]
  }
];

export const destinations: Destination[] = [
  {
    id: "dest-1",
    name: "Paris, France",
    description: "Discover the charm of the Eiffel Tower and indulge in world-class cuisine",
    image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2",
    introduction: "Paris, the City of Light, offers an unparalleled blend of culture, history, and modern living.",
    attractions: [
      "Eiffel Tower",
      "Louvre Museum",
      "Notre-Dame Cathedral",
      "Montmartre"
    ],
    travelOptions: [
      {
        type: "flight",
        description: "Direct flights available from major cities",
        price: "From $400"
      },
      {
        type: "train",
        description: "High-speed rail connections within Europe",
        price: "From $100"
      }
    ],
    recommendedStays: ["stay-1"]
  },
  {
    id: "dest-2",
    name: "Tokyo, Japan",
    description: "Experience the perfect blend of tradition and innovation in Japan's capital",
    image: "https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a",
    introduction: "Tokyo, a city where ancient traditions and cutting-edge technology exist in perfect harmony.",
    attractions: [
      "Shibuya Crossing",
      "Senso-ji Temple",
      "Tokyo Skytree",
      "Tsukiji Fish Market"
    ],
    travelOptions: [
      {
        type: "flight",
        description: "Direct flights from major Asian and Western cities",
        price: "From $800"
      }
    ],
    recommendedStays: ["stay-2"]
  },
  {
    id: "dest-3",
    name: "New York City, USA",
    description: "Explore the city that never sleeps, from Central Park to Times Square",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    introduction: "New York City, the cultural capital of America, where every neighborhood tells a unique story.",
    attractions: [
      "Central Park",
      "Times Square",
      "Empire State Building",
      "Broadway Shows"
    ],
    travelOptions: [
      {
        type: "flight",
        description: "Frequent flights from all major cities",
        price: "From $300"
      },
      {
        type: "train",
        description: "Amtrak connections from nearby cities",
        price: "From $50"
      }
    ],
    recommendedStays: ["stay-3"]
  }
];