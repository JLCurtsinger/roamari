import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { destinations } from "@/data/mockData";
import { scrollToTop } from "@/utils/scrollUtils";

export const TravelDestinations = () => {
  const navigate = useNavigate();

  const handleLearnMore = (id: string) => {
    navigate(`/destination-details/${id}`);
    scrollToTop();
  };

  return (
    <section id="travel" className="py-20 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-travel dark:bg-dark-gradient-travel text-transparent bg-clip-text">
          Popular Destinations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <Card key={destination.id} className="overflow-hidden hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl dark:text-white">{destination.name}</CardTitle>
                <CardDescription className="dark:text-gray-300">{destination.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full bg-gradient-sunset dark:bg-dark-gradient-sunset text-white hover:opacity-90"
                  onClick={() => handleLearnMore(destination.id)}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};