import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Wifi, MapPin, Star } from "lucide-react";

interface HousingCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
  wifiSpeed: string;
  type: string;
}

export const HousingCard = ({ image, title, location, price, wifiSpeed, type }: HousingCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <Badge 
          className="absolute top-4 left-4 bg-gradient-sunset text-white"
          variant="secondary"
        >
          <Star className="w-4 h-4 mr-1" />
          Popular Choice
        </Badge>
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="w-4 h-4" />
          {location}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="bg-gradient-travel text-gray-700">
              {type}
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Wifi className="w-4 h-4" />
              {wifiSpeed}Mbps
            </Badge>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-lg font-semibold">
              {price}<span className="text-sm text-muted-foreground">/month</span>
            </div>
            <Button className="bg-gradient-sunset text-white hover:opacity-90">
              View Details
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};