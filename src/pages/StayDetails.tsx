import { useParams, Link } from "react-router-dom";
import { stays } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wifi, MapPin, Star } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export const StayDetails = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const stay = stays.find(s => s.id === id);

  if (!stay) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Stay not found</h1>
        <Link to="/">
          <Button>Return Home</Button>
        </Link>
      </div>
    );
  }

  const handleBookNow = () => {
    toast({
      title: "Booking feature coming soon!",
      description: "This feature is not yet implemented.",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <img
            src={stay.image}
            alt={stay.title}
            className="w-full h-[400px] object-cover rounded-lg"
          />
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">{stay.title}</h1>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              {stay.location}
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-gradient-travel text-gray-700">
                {stay.type}
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <Wifi className="w-4 h-4" />
                {stay.wifiSpeed}Mbps
              </Badge>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Price Details</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{stay.price}<span className="text-sm text-muted-foreground">/month</span></p>
              <Button 
                onClick={handleBookNow}
                className="w-full mt-4 bg-gradient-sunset text-white hover:opacity-90"
              >
                Book Now
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Amenities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-2 gap-2">
                {stay.amenities.map((amenity, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400" />
                    {amenity}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Reviews</CardTitle>
            </CardHeader>
            <CardContent>
              {stay.reviews.map((review) => (
                <div key={review.id} className="border-b last:border-0 pb-4 mb-4">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold">{review.author}</p>
                    <div className="flex items-center">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">{review.date}</p>
                  <p className="mt-2">{review.comment}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};