import { useParams, Link } from "react-router-dom";
import { destinations, stays } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HousingCard } from "@/components/HousingCard";
import { Plane, Train, Bus } from "lucide-react";

export const DestinationDetails = () => {
  const { id } = useParams();
  const destination = destinations.find(d => d.id === id);

  if (!destination) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Destination not found</h1>
        <Link to="/">
          <Button>Return Home</Button>
        </Link>
      </div>
    );
  }

  const recommendedStays = stays.filter(stay => 
    destination.recommendedStays.includes(stay.id)
  );

  const getTravelIcon = (type: 'flight' | 'train' | 'bus') => {
    switch (type) {
      case 'flight':
        return <Plane className="w-5 h-5" />;
      case 'train':
        return <Train className="w-5 h-5" />;
      case 'bus':
        return <Bus className="w-5 h-5" />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <div className="space-y-8">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-[400px] object-cover rounded-lg"
        />

        <div className="space-y-6">
          <h1 className="text-4xl font-bold">{destination.name}</h1>
          <p className="text-xl text-muted-foreground">{destination.introduction}</p>

          <Card>
            <CardHeader>
              <CardTitle>Key Attractions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid md:grid-cols-2 gap-4">
                {destination.attractions.map((attraction, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    {attraction}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Travel Options</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                {destination.travelOptions.map((option, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 border rounded-lg">
                    {getTravelIcon(option.type)}
                    <div>
                      <p className="font-semibold capitalize">{option.type}</p>
                      <p className="text-sm text-muted-foreground">{option.description}</p>
                      <p className="text-sm font-semibold mt-2">{option.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {recommendedStays.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Recommended Stays</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendedStays.map((stay) => (
                  <HousingCard key={stay.id} {...stay} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};